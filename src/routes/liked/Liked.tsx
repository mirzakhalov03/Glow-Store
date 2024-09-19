import Nav from "../../components/nav/Nav";
import { Space, Table, Button } from 'antd';
import type { TableProps } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

interface LikedItem {
  key: string;
  name: string;
  price: number;
  id: string;
}

const Liked = () => {
  const [likedItems, setLikedItems] = useState<LikedItem[]>([]);
  const navigate = useNavigate(); 

  
  useEffect(() => {
    const storedLikedItems = localStorage.getItem('liked');
    if (storedLikedItems) {
      const parsedItems = JSON.parse(storedLikedItems);
  
      setLikedItems(parsedItems.map((item: any, index: number) => ({
        key: String(index + 1),
        name: item.name,
        price: item.price,
        id: item.id ? String(item.id) : ''  
      })));
    }
  }, []);
  


  const handleDelete = (key: string) => {
    const updatedLikedItems = likedItems.filter(item => item.key !== key);
    setLikedItems(updatedLikedItems);
    localStorage.setItem('liked', JSON.stringify(updatedLikedItems));
    window.location.reload();
  };

  const handleNavigate = (id: string) => {
    console.log('Navigating to product with ID:', id);  
    navigate(`/product/${id}`);
  };

  const columns: TableProps<LikedItem>['columns'] = [
    {
      title: 'ID',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, data) => (
        <span
          onClick={() => handleNavigate(data.id)} 
          style={{ color: 'dodgerblue', cursor: 'pointer', textDecoration: 'underline' }} 
        >
          {text}
        </span>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `$${price}`,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            danger
            onClick={() => handleDelete(record.key)}
          >
            Remove
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Nav />
      <div className="w-full container">
        <h1 className="text-center text-4xl p-5 text-[dodgerblue] tracking-wider font-[Magilio]">Liked Products</h1>
        <Table columns={columns} dataSource={likedItems} />
      </div>
    </>
  );
};

export default Liked;
