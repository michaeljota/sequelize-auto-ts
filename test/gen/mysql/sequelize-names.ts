////////////////////////////////////////////////////////////////////
//
// GENERATED CLASS
//
// DO NOT EDIT
//
// See sequelize-auto-ts for edits
//
////////////////////////////////////////////////////////////////////

'depends typescript-client-server-compat.js';

import types = require('./sequelize-types');

export interface SequelizeNames {
    TableNames: TableNames;
    calculatedFields:CalculatedFields;
    references:References;
    alphabetical_list_of_productFields:AlphabeticalListOfProductsFields;
    categoryFields:CategoriesFields;
    category_sales_for_1997Fields:CategorySalesFor1997Fields;
    current_product_listFields:CurrentProductListFields;
    customer_and_suppliers_by_cityFields:CustomerAndSuppliersByCityFields;
    customer_customer_demoFields:CustomerCustomerDemoFields;
    customer_demographicFields:CustomerDemographicsFields;
    customerFields:CustomersFields;
    employeeFields:EmployeesFields;
    employee_territoryFields:EmployeeTerritoriesFields;
    invoiceFields:InvoicesFields;
    order_detailFields:OrderDetailsFields;
    order_details_extendedFields:OrderDetailsExtendedFields;
    order_subtotalFields:OrderSubtotalsFields;
    orderFields:OrdersFields;
    orders_qryFields:OrdersQryFields;
    product_sales_for_1997Fields:ProductSalesFor1997Fields;
    productFields:ProductsFields;
    products_above_average_priceFields:ProductsAboveAveragePriceFields;
    products_by_categoryFields:ProductsByCategoryFields;
    quarterly_orderFields:QuarterlyOrdersFields;
    regionFields:RegionFields;
    sales_by_categoryFields:SalesByCategoryFields;
    sales_totals_by_amountFields:SalesTotalsByAmountFields;
    shipperFields:ShippersFields;
    summary_of_sales_by_quarterFields:SummaryOfSalesByQuarterFields;
    summary_of_sales_by_yearFields:SummaryOfSalesByYearFields;
    supplierFields:SuppliersFields;
    territoryFields:TerritoriesFields;
}

export class TableNames {
    Alphabetical_list_of_products:string = 'Alphabetical list of products';
    Categories:string = 'Categories';
    Category_Sales_for_1997:string = 'Category Sales for 1997';
    Current_Product_List:string = 'Current Product List';
    Customer_and_Suppliers_by_City:string = 'Customer and Suppliers by City';
    CustomerCustomerDemo:string = 'CustomerCustomerDemo';
    CustomerDemographics:string = 'CustomerDemographics';
    Customers:string = 'Customers';
    Employees:string = 'Employees';
    EmployeeTerritories:string = 'EmployeeTerritories';
    Invoices:string = 'Invoices';
    Order_Details:string = 'Order Details';
    Order_Details_Extended:string = 'Order Details Extended';
    Order_Subtotals:string = 'Order Subtotals';
    Orders:string = 'Orders';
    Orders_Qry:string = 'Orders Qry';
    Product_Sales_for_1997:string = 'Product Sales for 1997';
    Products:string = 'Products';
    Products_Above_Average_Price:string = 'Products Above Average Price';
    Products_by_Category:string = 'Products by Category';
    Quarterly_Orders:string = 'Quarterly Orders';
    Region:string = 'Region';
    Sales_by_Category:string = 'Sales by Category';
    Sales_Totals_by_Amount:string = 'Sales Totals by Amount';
    Shippers:string = 'Shippers';
    Summary_of_Sales_by_Quarter:string = 'Summary of Sales by Quarter';
    Summary_of_Sales_by_Year:string = 'Summary of Sales by Year';
    Suppliers:string = 'Suppliers';
    Territories:string = 'Territories';
}
export var tableNames:TableNames = new TableNames();

export class AlphabeticalListOfProductsFields {
    ProductID:string = 'ProductID';
    ProductName:string = 'ProductName';
    SupplierID:string = 'SupplierID';
    CategoryID:string = 'CategoryID';
    QuantityPerUnit:string = 'QuantityPerUnit';
    UnitPrice:string = 'UnitPrice';
    UnitsInStock:string = 'UnitsInStock';
    UnitsOnOrder:string = 'UnitsOnOrder';
    ReorderLevel:string = 'ReorderLevel';
    Discontinued:string = 'Discontinued';
    CategoryName:string = 'CategoryName';
}
export var alphabeticalListOfProductsFields:AlphabeticalListOfProductsFields = new AlphabeticalListOfProductsFields();


export class CategoriesFields {
    CategoryID:string = 'CategoryID';
    CategoryName:string = 'CategoryName';
    Description:string = 'Description';
    Picture:string = 'Picture';
}
export var categoriesFields:CategoriesFields = new CategoriesFields();


export class CategorySalesFor1997Fields {
    CategoryName:string = 'CategoryName';
    CategorySales:string = 'CategorySales';
}
export var categorySalesFor1997Fields:CategorySalesFor1997Fields = new CategorySalesFor1997Fields();


export class CurrentProductListFields {
    ProductID:string = 'ProductID';
    ProductName:string = 'ProductName';
}
export var currentProductListFields:CurrentProductListFields = new CurrentProductListFields();


export class CustomerAndSuppliersByCityFields {
    City:string = 'City';
    CompanyName:string = 'CompanyName';
    ContactName:string = 'ContactName';
    Relationship:string = 'Relationship';
}
export var customerAndSuppliersByCityFields:CustomerAndSuppliersByCityFields = new CustomerAndSuppliersByCityFields();


export class CustomerCustomerDemoFields {
    CustomerID:string = 'CustomerID';
    CustomerTypeID:string = 'CustomerTypeID';
    customerDemographic:string = 'customerDemographic';
    customer:string = 'customer';
}
export var customerCustomerDemoFields:CustomerCustomerDemoFields = new CustomerCustomerDemoFields();


export class CustomerDemographicsFields {
    CustomerTypeID:string = 'CustomerTypeID';
    CustomerDesc:string = 'CustomerDesc';
}
export var customerDemographicsFields:CustomerDemographicsFields = new CustomerDemographicsFields();


export class CustomersFields {
    CustomerID:string = 'CustomerID';
    CompanyName:string = 'CompanyName';
    ContactName:string = 'ContactName';
    ContactTitle:string = 'ContactTitle';
    Address:string = 'Address';
    City:string = 'City';
    Region:string = 'Region';
    PostalCode:string = 'PostalCode';
    Country:string = 'Country';
    Phone:string = 'Phone';
    Fax:string = 'Fax';
}
export var customersFields:CustomersFields = new CustomersFields();


export class EmployeesFields {
    EmployeeID:string = 'EmployeeID';
    LastName:string = 'LastName';
    FirstName:string = 'FirstName';
    Title:string = 'Title';
    TitleOfCourtesy:string = 'TitleOfCourtesy';
    BirthDate:string = 'BirthDate';
    HireDate:string = 'HireDate';
    Address:string = 'Address';
    City:string = 'City';
    Region:string = 'Region';
    PostalCode:string = 'PostalCode';
    Country:string = 'Country';
    HomePhone:string = 'HomePhone';
    Extension:string = 'Extension';
    Photo:string = 'Photo';
    Notes:string = 'Notes';
    ReportsTo:string = 'ReportsTo';
    PhotoPath:string = 'PhotoPath';
    Salary:string = 'Salary';
}
export var employeesFields:EmployeesFields = new EmployeesFields();


export class EmployeeTerritoriesFields {
    EmployeeID:string = 'EmployeeID';
    TerritoryID:string = 'TerritoryID';
    employee:string = 'employee';
    territory:string = 'territory';
}
export var employeeTerritoriesFields:EmployeeTerritoriesFields = new EmployeeTerritoriesFields();


export class InvoicesFields {
    ShipName:string = 'ShipName';
    ShipAddress:string = 'ShipAddress';
    ShipCity:string = 'ShipCity';
    ShipRegion:string = 'ShipRegion';
    ShipPostalCode:string = 'ShipPostalCode';
    ShipCountry:string = 'ShipCountry';
    CustomerID:string = 'CustomerID';
    CustomerName:string = 'CustomerName';
    Address:string = 'Address';
    City:string = 'City';
    Region:string = 'Region';
    PostalCode:string = 'PostalCode';
    Country:string = 'Country';
    Salesperson:string = 'Salesperson';
    OrderID:string = 'OrderID';
    OrderDate:string = 'OrderDate';
    RequiredDate:string = 'RequiredDate';
    ShippedDate:string = 'ShippedDate';
    ShipperName:string = 'ShipperName';
    ProductID:string = 'ProductID';
    ProductName:string = 'ProductName';
    UnitPrice:string = 'UnitPrice';
    Quantity:string = 'Quantity';
    Discount:string = 'Discount';
    ExtendedPrice:string = 'ExtendedPrice';
    Freight:string = 'Freight';
}
export var invoicesFields:InvoicesFields = new InvoicesFields();


export class OrderDetailsFields {
    OrderID:string = 'OrderID';
    ProductID:string = 'ProductID';
    UnitPrice:string = 'UnitPrice';
    Quantity:string = 'Quantity';
    Discount:string = 'Discount';
    order:string = 'order';
    product:string = 'product';
}
export var orderDetailsFields:OrderDetailsFields = new OrderDetailsFields();


export class OrderDetailsExtendedFields {
    OrderID:string = 'OrderID';
    ProductID:string = 'ProductID';
    ProductName:string = 'ProductName';
    UnitPrice:string = 'UnitPrice';
    Quantity:string = 'Quantity';
    Discount:string = 'Discount';
    ExtendedPrice:string = 'ExtendedPrice';
}
export var orderDetailsExtendedFields:OrderDetailsExtendedFields = new OrderDetailsExtendedFields();


export class OrderSubtotalsFields {
    OrderID:string = 'OrderID';
    Subtotal:string = 'Subtotal';
}
export var orderSubtotalsFields:OrderSubtotalsFields = new OrderSubtotalsFields();


export class OrdersFields {
    OrderID:string = 'OrderID';
    CustomerID:string = 'CustomerID';
    EmployeeID:string = 'EmployeeID';
    OrderDate:string = 'OrderDate';
    RequiredDate:string = 'RequiredDate';
    ShippedDate:string = 'ShippedDate';
    ShipVia:string = 'ShipVia';
    Freight:string = 'Freight';
    ShipName:string = 'ShipName';
    ShipAddress:string = 'ShipAddress';
    ShipCity:string = 'ShipCity';
    ShipRegion:string = 'ShipRegion';
    ShipPostalCode:string = 'ShipPostalCode';
    ShipCountry:string = 'ShipCountry';
    customer:string = 'customer';
    employee:string = 'employee';
    shipper:string = 'shipper';
}
export var ordersFields:OrdersFields = new OrdersFields();


export class OrdersQryFields {
    OrderID:string = 'OrderID';
    CustomerID:string = 'CustomerID';
    EmployeeID:string = 'EmployeeID';
    OrderDate:string = 'OrderDate';
    RequiredDate:string = 'RequiredDate';
    ShippedDate:string = 'ShippedDate';
    ShipVia:string = 'ShipVia';
    Freight:string = 'Freight';
    ShipName:string = 'ShipName';
    ShipAddress:string = 'ShipAddress';
    ShipCity:string = 'ShipCity';
    ShipRegion:string = 'ShipRegion';
    ShipPostalCode:string = 'ShipPostalCode';
    ShipCountry:string = 'ShipCountry';
    CompanyName:string = 'CompanyName';
    Address:string = 'Address';
    City:string = 'City';
    Region:string = 'Region';
    PostalCode:string = 'PostalCode';
    Country:string = 'Country';
}
export var ordersQryFields:OrdersQryFields = new OrdersQryFields();


export class ProductSalesFor1997Fields {
    CategoryName:string = 'CategoryName';
    ProductName:string = 'ProductName';
    ProductSales:string = 'ProductSales';
}
export var productSalesFor1997Fields:ProductSalesFor1997Fields = new ProductSalesFor1997Fields();


export class ProductsFields {
    ProductID:string = 'ProductID';
    ProductName:string = 'ProductName';
    SupplierID:string = 'SupplierID';
    CategoryID:string = 'CategoryID';
    QuantityPerUnit:string = 'QuantityPerUnit';
    UnitPrice:string = 'UnitPrice';
    UnitsInStock:string = 'UnitsInStock';
    UnitsOnOrder:string = 'UnitsOnOrder';
    ReorderLevel:string = 'ReorderLevel';
    Discontinued:string = 'Discontinued';
    category:string = 'category';
    supplier:string = 'supplier';
}
export var productsFields:ProductsFields = new ProductsFields();


export class ProductsAboveAveragePriceFields {
    ProductName:string = 'ProductName';
    UnitPrice:string = 'UnitPrice';
}
export var productsAboveAveragePriceFields:ProductsAboveAveragePriceFields = new ProductsAboveAveragePriceFields();


export class ProductsByCategoryFields {
    CategoryName:string = 'CategoryName';
    ProductName:string = 'ProductName';
    QuantityPerUnit:string = 'QuantityPerUnit';
    UnitsInStock:string = 'UnitsInStock';
    Discontinued:string = 'Discontinued';
}
export var productsByCategoryFields:ProductsByCategoryFields = new ProductsByCategoryFields();


export class QuarterlyOrdersFields {
    CustomerID:string = 'CustomerID';
    CompanyName:string = 'CompanyName';
    City:string = 'City';
    Country:string = 'Country';
}
export var quarterlyOrdersFields:QuarterlyOrdersFields = new QuarterlyOrdersFields();


export class RegionFields {
    RegionID:string = 'RegionID';
    RegionDescription:string = 'RegionDescription';
}
export var regionFields:RegionFields = new RegionFields();


export class SalesByCategoryFields {
    CategoryID:string = 'CategoryID';
    CategoryName:string = 'CategoryName';
    ProductName:string = 'ProductName';
    ProductSales:string = 'ProductSales';
}
export var salesByCategoryFields:SalesByCategoryFields = new SalesByCategoryFields();


export class SalesTotalsByAmountFields {
    SaleAmount:string = 'SaleAmount';
    OrderID:string = 'OrderID';
    CompanyName:string = 'CompanyName';
    ShippedDate:string = 'ShippedDate';
}
export var salesTotalsByAmountFields:SalesTotalsByAmountFields = new SalesTotalsByAmountFields();


export class ShippersFields {
    ShipperID:string = 'ShipperID';
    CompanyName:string = 'CompanyName';
    Phone:string = 'Phone';
}
export var shippersFields:ShippersFields = new ShippersFields();


export class SummaryOfSalesByQuarterFields {
    ShippedDate:string = 'ShippedDate';
    OrderID:string = 'OrderID';
    Subtotal:string = 'Subtotal';
}
export var summaryOfSalesByQuarterFields:SummaryOfSalesByQuarterFields = new SummaryOfSalesByQuarterFields();


export class SummaryOfSalesByYearFields {
    ShippedDate:string = 'ShippedDate';
    OrderID:string = 'OrderID';
    Subtotal:string = 'Subtotal';
}
export var summaryOfSalesByYearFields:SummaryOfSalesByYearFields = new SummaryOfSalesByYearFields();


export class SuppliersFields {
    SupplierID:string = 'SupplierID';
    CompanyName:string = 'CompanyName';
    ContactName:string = 'ContactName';
    ContactTitle:string = 'ContactTitle';
    Address:string = 'Address';
    City:string = 'City';
    Region:string = 'Region';
    PostalCode:string = 'PostalCode';
    Country:string = 'Country';
    Phone:string = 'Phone';
    Fax:string = 'Fax';
    HomePage:string = 'HomePage';
}
export var suppliersFields:SuppliersFields = new SuppliersFields();


export class TerritoriesFields {
    TerritoryID:string = 'TerritoryID';
    TerritoryDescription:string = 'TerritoryDescription';
    RegionID:string = 'RegionID';
    region:string = 'region';
}
export var territoriesFields:TerritoriesFields = new TerritoriesFields();


export class CalculatedFields {}
export var calculatedFields:CalculatedFields = new CalculatedFields();

export class References {
    CustomerTypeID:types.Reference = { tableName: 'CustomerDemographics', primaryKey: 'customerDemographicId', foreignKey: 'CustomerTypeID', as: undefined};
    CustomerID:types.Reference = { tableName: 'Customers', primaryKey: 'customerId', foreignKey: 'CustomerID', as: undefined};
    EmployeeID:types.Reference = { tableName: 'Employees', primaryKey: 'employeeId', foreignKey: 'EmployeeID', as: undefined};
    TerritoryID:types.Reference = { tableName: 'Territories', primaryKey: 'territoryId', foreignKey: 'TerritoryID', as: undefined};
    ReportsTo:types.Reference = { tableName: 'Employees', primaryKey: 'employeeId', foreignKey: 'ReportsTo', as: undefined};
    OrderID:types.Reference = { tableName: 'Orders', primaryKey: 'orderId', foreignKey: 'OrderID', as: undefined};
    ProductID:types.Reference = { tableName: 'Products', primaryKey: 'productId', foreignKey: 'ProductID', as: undefined};
    ShipVia:types.Reference = { tableName: 'Shippers', primaryKey: 'shipperId', foreignKey: 'ShipVia', as: undefined};
    CategoryID:types.Reference = { tableName: 'Categories', primaryKey: 'categoryId', foreignKey: 'CategoryID', as: undefined};
    SupplierID:types.Reference = { tableName: 'Suppliers', primaryKey: 'supplierId', foreignKey: 'SupplierID', as: undefined};
    RegionID:types.Reference = { tableName: 'Region', primaryKey: 'regionId', foreignKey: 'RegionID', as: undefined};
    CategoryName:types.Reference = { tableName: 'Category Sales for 1997', primaryKey: 'CategoryName', foreignKey: 'CategoryName', as: undefined};
    City:types.Reference = { tableName: 'Customer and Suppliers by City', primaryKey: 'City', foreignKey: 'City', as: undefined};
    ShipName:types.Reference = { tableName: 'Invoices', primaryKey: 'ShipName', foreignKey: 'ShipName', as: undefined};
    ProductName:types.Reference = { tableName: 'Products Above Average Price', primaryKey: 'ProductName', foreignKey: 'ProductName', as: undefined};
    SaleAmount:types.Reference = { tableName: 'Sales Totals by Amount', primaryKey: 'SaleAmount', foreignKey: 'SaleAmount', as: undefined};
    ShipperID:types.Reference = { tableName: 'Shippers', primaryKey: 'ShipperID', foreignKey: 'ShipperID', as: undefined};
    ShippedDate:types.Reference = { tableName: 'Summary of Sales by Quarter', primaryKey: 'ShippedDate', foreignKey: 'ShippedDate', as: undefined};
}

export var references:References = new References();
