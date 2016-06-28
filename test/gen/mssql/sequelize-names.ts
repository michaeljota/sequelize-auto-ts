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
    employeeFields:EmployeesFields;
    categoryFields:CategoriesFields;
    customerFields:CustomersFields;
    shipperFields:ShippersFields;
    supplierFields:SuppliersFields;
    orderFields:OrdersFields;
    productFields:ProductsFields;
    order_detailFields:OrderDetailsFields;
    customer_and_suppliers_by_cityFields:CustomerAndSuppliersByCityFields;
    alphabetical_list_of_productFields:AlphabeticalListOfProductsFields;
    current_product_listFields:CurrentProductListFields;
    orders_qryFields:OrdersQryFields;
    products_above_average_priceFields:ProductsAboveAveragePriceFields;
    products_by_categoryFields:ProductsByCategoryFields;
    quarterly_orderFields:QuarterlyOrdersFields;
    invoiceFields:InvoicesFields;
    order_details_extendedFields:OrderDetailsExtendedFields;
    order_subtotalFields:OrderSubtotalsFields;
    product_sales_for_1997Fields:ProductSalesFor1997Fields;
    category_sales_for_1997Fields:CategorySalesFor1997Fields;
    sales_by_categoryFields:SalesByCategoryFields;
    sales_totals_by_amountFields:SalesTotalsByAmountFields;
    summary_of_sales_by_quarterFields:SummaryOfSalesByQuarterFields;
    summary_of_sales_by_yearFields:SummaryOfSalesByYearFields;
    customer_customer_demoFields:CustomerCustomerDemoFields;
    customer_demographicFields:CustomerDemographicsFields;
    regionFields:RegionFields;
    territoryFields:TerritoriesFields;
    employee_territoryFields:EmployeeTerritoriesFields;
}

export class TableNames {
    Employees:string = 'Employees';
    Categories:string = 'Categories';
    Customers:string = 'Customers';
    Shippers:string = 'Shippers';
    Suppliers:string = 'Suppliers';
    Orders:string = 'Orders';
    Products:string = 'Products';
    Order_Details:string = 'Order Details';
    Customer_and_Suppliers_by_City:string = 'Customer and Suppliers by City';
    Alphabetical_list_of_products:string = 'Alphabetical list of products';
    Current_Product_List:string = 'Current Product List';
    Orders_Qry:string = 'Orders Qry';
    Products_Above_Average_Price:string = 'Products Above Average Price';
    Products_by_Category:string = 'Products by Category';
    Quarterly_Orders:string = 'Quarterly Orders';
    Invoices:string = 'Invoices';
    Order_Details_Extended:string = 'Order Details Extended';
    Order_Subtotals:string = 'Order Subtotals';
    Product_Sales_for_1997:string = 'Product Sales for 1997';
    Category_Sales_for_1997:string = 'Category Sales for 1997';
    Sales_by_Category:string = 'Sales by Category';
    Sales_Totals_by_Amount:string = 'Sales Totals by Amount';
    Summary_of_Sales_by_Quarter:string = 'Summary of Sales by Quarter';
    Summary_of_Sales_by_Year:string = 'Summary of Sales by Year';
    CustomerCustomerDemo:string = 'CustomerCustomerDemo';
    CustomerDemographics:string = 'CustomerDemographics';
    Region:string = 'Region';
    Territories:string = 'Territories';
    EmployeeTerritories:string = 'EmployeeTerritories';
}
export var tableNames:TableNames = new TableNames();

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


export class CategoriesFields {
    CategoryID:string = 'CategoryID';
    CategoryName:string = 'CategoryName';
    Description:string = 'Description';
    Picture:string = 'Picture';
}
export var categoriesFields:CategoriesFields = new CategoriesFields();


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


export class ShippersFields {
    ShipperID:string = 'ShipperID';
    CompanyName:string = 'CompanyName';
    Phone:string = 'Phone';
}
export var shippersFields:ShippersFields = new ShippersFields();


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
}
export var ordersFields:OrdersFields = new OrdersFields();


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
}
export var productsFields:ProductsFields = new ProductsFields();


export class OrderDetailsFields {
    OrderID:string = 'OrderID';
    ProductID:string = 'ProductID';
    UnitPrice:string = 'UnitPrice';
    Quantity:string = 'Quantity';
    Discount:string = 'Discount';
}
export var orderDetailsFields:OrderDetailsFields = new OrderDetailsFields();


export class CustomerAndSuppliersByCityFields {
    City:string = 'City';
    CompanyName:string = 'CompanyName';
    ContactName:string = 'ContactName';
    Relationship:string = 'Relationship';
}
export var customerAndSuppliersByCityFields:CustomerAndSuppliersByCityFields = new CustomerAndSuppliersByCityFields();


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


export class CurrentProductListFields {
    ProductID:string = 'ProductID';
    ProductName:string = 'ProductName';
}
export var currentProductListFields:CurrentProductListFields = new CurrentProductListFields();


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


export class ProductSalesFor1997Fields {
    CategoryName:string = 'CategoryName';
    ProductName:string = 'ProductName';
    ProductSales:string = 'ProductSales';
}
export var productSalesFor1997Fields:ProductSalesFor1997Fields = new ProductSalesFor1997Fields();


export class CategorySalesFor1997Fields {
    CategoryName:string = 'CategoryName';
    CategorySales:string = 'CategorySales';
}
export var categorySalesFor1997Fields:CategorySalesFor1997Fields = new CategorySalesFor1997Fields();


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


export class CustomerCustomerDemoFields {
    CustomerID:string = 'CustomerID';
    CustomerTypeID:string = 'CustomerTypeID';
}
export var customerCustomerDemoFields:CustomerCustomerDemoFields = new CustomerCustomerDemoFields();


export class CustomerDemographicsFields {
    CustomerTypeID:string = 'CustomerTypeID';
    CustomerDesc:string = 'CustomerDesc';
}
export var customerDemographicsFields:CustomerDemographicsFields = new CustomerDemographicsFields();


export class RegionFields {
    RegionID:string = 'RegionID';
    RegionDescription:string = 'RegionDescription';
}
export var regionFields:RegionFields = new RegionFields();


export class TerritoriesFields {
    TerritoryID:string = 'TerritoryID';
    TerritoryDescription:string = 'TerritoryDescription';
    RegionID:string = 'RegionID';
}
export var territoriesFields:TerritoriesFields = new TerritoriesFields();


export class EmployeeTerritoriesFields {
    EmployeeID:string = 'EmployeeID';
    TerritoryID:string = 'TerritoryID';
}
export var employeeTerritoriesFields:EmployeeTerritoriesFields = new EmployeeTerritoriesFields();


export class CalculatedFields {}
export var calculatedFields:CalculatedFields = new CalculatedFields();

export class References {
    CustomerTypeID:types.Reference = { tableName: 'CustomerCustomerDemo', primaryKey: 'customerCustomerDemoId', foreignKey: 'CustomerTypeID', as: undefined};
    CustomerID:types.Reference = { tableName: 'CustomerCustomerDemo', primaryKey: 'customerCustomerDemoId', foreignKey: 'CustomerID', as: undefined};
    ReportsTo:types.Reference = { tableName: 'Employees', primaryKey: 'employeeId', foreignKey: 'ReportsTo', as: undefined};
    EmployeeID:types.Reference = { tableName: 'EmployeeTerritories', primaryKey: 'employeeTerritoryId', foreignKey: 'EmployeeID', as: undefined};
    TerritoryID:types.Reference = { tableName: 'EmployeeTerritories', primaryKey: 'employeeTerritoryId', foreignKey: 'TerritoryID', as: undefined};
    OrderID:types.Reference = { tableName: 'Order Details', primaryKey: 'order DetailId', foreignKey: 'OrderID', as: undefined};
    ProductID:types.Reference = { tableName: 'Order Details', primaryKey: 'order DetailId', foreignKey: 'ProductID', as: undefined};
    ShipVia:types.Reference = { tableName: 'Orders', primaryKey: 'orderId', foreignKey: 'ShipVia', as: undefined};
    CategoryID:types.Reference = { tableName: 'Products', primaryKey: 'productId', foreignKey: 'CategoryID', as: undefined};
    SupplierID:types.Reference = { tableName: 'Products', primaryKey: 'productId', foreignKey: 'SupplierID', as: undefined};
    RegionID:types.Reference = { tableName: 'Territories', primaryKey: 'territoryId', foreignKey: 'RegionID', as: undefined};
    ShipperID:types.Reference = { tableName: 'Shippers', primaryKey: 'ShipperID', foreignKey: 'ShipperID', as: undefined};
    City:types.Reference = { tableName: 'Customer and Suppliers by City', primaryKey: 'City', foreignKey: 'City', as: undefined};
    ProductName:types.Reference = { tableName: 'Products Above Average Price', primaryKey: 'ProductName', foreignKey: 'ProductName', as: undefined};
    CategoryName:types.Reference = { tableName: 'Products by Category', primaryKey: 'CategoryName', foreignKey: 'CategoryName', as: undefined};
    ShipName:types.Reference = { tableName: 'Invoices', primaryKey: 'ShipName', foreignKey: 'ShipName', as: undefined};
    SaleAmount:types.Reference = { tableName: 'Sales Totals by Amount', primaryKey: 'SaleAmount', foreignKey: 'SaleAmount', as: undefined};
    ShippedDate:types.Reference = { tableName: 'Summary of Sales by Quarter', primaryKey: 'ShippedDate', foreignKey: 'ShippedDate', as: undefined};
}

export var references:References = new References();
