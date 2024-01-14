export type ProductType = {
  productSku: string;
  productName: string;
  productCollection: string;
  productCategoryHierarchy: string;
  productMeasurements: ProductMeasurements;
  productPrice: string;
  productPriceDiscount: number;
  productImageUrl: string;
  store: string;
  ecoPart: string;
  productMaterials: string;
  productUsage: string;
  productAssemblyTime: string;
  productAssemblyDescription: string;
};

export type ProductMeasurements = {
  height: string;
  width: string;
  length: string;
};

export type CategoryType = {
  id: string;
  title: string;
};
