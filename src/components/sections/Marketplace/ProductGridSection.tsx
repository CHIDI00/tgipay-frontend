import React from "react";

interface ProductGridSectionProps {
  title: string;
  children: React.ReactNode;
}

const ProductGridSection: React.FC<ProductGridSectionProps> = ({
  title,
  children,
}) => {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold">{title}</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {children}
      </div>
    </section>
  );
};

export default ProductGridSection;
