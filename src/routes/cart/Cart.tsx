import Nav from "../../components/nav/Nav";
import { Space, Table, Button } from 'antd';
import type { TableProps } from 'antd';
import { removeFromCart } from "../../redux/slices/cart-slice";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

interface CartItem {
  key: string;
  name: string;
  brand: string;
  product_type: string;
  price: number;
}

const Cart = () => {
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
  const reduxCartItems = useSelector((state: any) => state.cart.cart); 
  
  useEffect(() => {
    setCartItems(reduxCartItems.map((item: any, index: number) => ({
      key: String(index + 1),
      name: item.name,
      product_type: item.product_type,
      price: item.price,
    })));
  }, [reduxCartItems]);

  const columns: TableProps<CartItem>['columns'] = [
    {
      title: 'ID',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Product Type',
      dataIndex: 'product_type',
      key: 'product_type',
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

  const handleDelete = (key: string) => {
    const updatedCartItems = cartItems.filter(item => item.key !== key);
    setCartItems(updatedCartItems);
    
    dispatch(removeFromCart(key));
    
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    window.location.reload();
  };

  return (
    <>
      <Nav />
      <div className="w-full container">
        <h1 className="text-center text-4xl p-5 text-[dodgerblue] tracking-wider font-[Magilio]">Welcome to your Cart</h1>
        <Table columns={columns} dataSource={cartItems} />
      </div>
    </>
  );
};

export default Cart;
