import { useState } from "react";
import { useGetProductsByTypeQuery } from "../../redux/api/product-api";
import Loading from "../../utils/Loading/Loading";
import Card from "../card/Card";

const groupByProductType = (products: any) => {
    return products.reduce((acc: any, product: any) => {
        const type = product.product_type || 'Unknown';
        if (!acc[type]) {
            acc[type] = [];
        }
        acc[type].push(product);
        return acc;
    }, {});
};

const CardsHug = ({ dynamicTypeName }: any) => {
    const { data, error, isLoading } = useGetProductsByTypeQuery(dynamicTypeName);
    const [expandedTypes, setExpandedTypes] = useState<{ [key: string]: boolean }>({});

    if (isLoading) {
        return <div className="container"><Loading /></div>;
    }

    if (error) {
        return <div className="container mt-16 py-16">Error fetching products</div>;
    }

    const groupedProducts = groupByProductType(data || []);

    const handleShowMore = (type: string) => {
        setExpandedTypes(prevState => ({
            ...prevState,
            [type]: !prevState[type],
        }));
    };

    return (
        <div className="w-full container">
            <div className="w-full">
                {Object.keys(groupedProducts).map((type) => (
                    <div key={type} className="mb-10">
                        <div className="flex w-full items-center justify-between">
                            <div className="type text-2xl text-[#ba5e5e]">{type.charAt(0).toUpperCase() + type.slice(1)}</div>
                            <button
                                onClick={() => handleShowMore(type)}
                                className="more hover:cursor-pointer text-lg text-[#ffa9b8]"
                            >
                                {expandedTypes[type] ? "Show less..." : "Show more..."}
                            </button>
                        </div>
                        <div className="w-full mt-2 grid gap-4 grid-cols-4">
                            {groupedProducts[type]
                                .slice(4, expandedTypes[type] ? groupedProducts[type].length : 8)
                                .map((item: any) => (
                                    <Card key={item.id} data={item} />
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardsHug;
