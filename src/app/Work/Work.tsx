"use client"
import React from 'react';
import Link from "next/link";

interface GalleryItem {
  id: number;
  thumbnail: string;
  videoUrl: string;
  title: string;
  type: string;
  categories: string[];
}

  const GalleryImage: React.FC<{ item: GalleryItem }> = ({ item }) => {
    const [hover, setHover] = React.useState(false);

    return (
      <div
        className="relative"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Link href={item.videoUrl} passHref>
          <i className="block">
            <img src={item.thumbnail} alt={item.title} className="w-full h-auto" />
          </i>
        </Link>
        {hover && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
            <h3>{item.title}</h3>
            <p>{item.categories.join(' / ')}</p>
          </div>
        )}
      </div>
    );
  };

const WorkGallery: React.FC = () => {
  const galleryItems: GalleryItem[] = [

    {
        id: 1,
        thumbnail: "https://themewagon.github.io/videograph/img/work/work-1.jpg",
        videoUrl: "https://www.youtube.com/watch?v=JZjAg6fK-BQ&pp=ygUIcmVtaW5kZXI%3D",
        type: "wide",
        title: "VIP Auto Tires & Service",
        categories: ["eCommerce", "Magento"],
      },
      {
        id: 2,
        thumbnail: "https://themewagon.github.io/videograph/img/work/work-2.jpg",
        videoUrl: "https://www.youtube.com/watch?v=JZjAg6fK-BQ&pp=ygUIcmVtaW5kZXI%3D",
        type: "small",
        title: "VIP Auto Tires & Service",
        categories: ["eCommerce", "Magento"],
      },
      {
        id: 3,
        thumbnail: "https://themewagon.github.io/videograph/img/work/work-3.jpg",
        videoUrl: "https://www.youtube.com/watch?v=JZjAg6fK-BQ&pp=ygUIcmVtaW5kZXI%3D",
        type: "small",
        title: "VIP Auto Tires & Service",
        categories: ["eCommerce", "Magento"],
      },
      {
        id: 4,
        thumbnail: "https://themewagon.github.io/videograph/img/work/work-4.jpg",
        videoUrl: "https://www.youtube.com/watch?v=JZjAg6fK-BQ&pp=ygUIcmVtaW5kZXI%3D",
        type: "large",
        title: "VIP Auto Tires & Service",
        categories: ["eCommerce", "Magento"],
      },
      {
        id: 5,
        thumbnail: "https://themewagon.github.io/videograph/img/work/work-5.jpg",
        videoUrl: "https://www.youtube.com/watch?v=JZjAg6fK-BQ&pp=ygUIcmVtaW5kZXI%3D",
        type: "small",
        title: "VIP Auto Tires & Service",
        categories: ["eCommerce", "Magento"],
      },
      {
        id: 6,
        thumbnail: "https://themewagon.github.io/videograph/img/work/work-6.jpg",
        videoUrl: "https://www.youtube.com/watch?v=JZjAg6fK-BQ&pp=ygUIcmVtaW5kZXI%3D",
        type: "small",
        title: "VIP Auto Tires & Service",
        categories: ["eCommerce", "Magento"],
      },
      {
        id: 7,
        thumbnail: "https://themewagon.github.io/videograph/img/work/work-7.jpg",
        videoUrl: "https://www.youtube.com/watch?v=JZjAg6fK-BQ&pp=ygUIcmVtaW5kZXI%3D",
        type: "wide",
        title: "VIP Auto Tires & Service",
        categories: ["eCommerce", "Magento"],
      },
  ];

  const renderGridItems = (itemIds: number[]): JSX.Element[] => {
    return itemIds.map((id) => {
      const item = galleryItems.find((item) => item.id === id);
      if (!item) return <div key={`missing-${id}`} className="w-full h-auto"></div>; // Handle the case where an item is not found
      return <GalleryImage item={item} key={item.id} />;
    });
  };

  return (
    <div className="flex gap-2 justify-center w-full relative bg-primary">
      {/* First Column */}
      <div className="flex-1">
        <div className="grid grid-rows-2 gap-2">
          <div className="row-span-1">
            {renderGridItems([1])}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {renderGridItems([5, 6])}
          </div>
        </div>
      </div>

      {/* Second Column */}
      <div className="flex-1">
        <div className="grid grid-rows-2 gap-2">
          <div className="grid grid-cols-2 gap-2">
            {renderGridItems([2, 3])}
          </div>
          <div className="row-span-1">
            {renderGridItems([7])}
          </div>
        </div>
      </div>

      {/* Third Column */}
      <div className="flex-1">
        {renderGridItems([4])}
      </div>
    </div>
  );
};

export default WorkGallery;
