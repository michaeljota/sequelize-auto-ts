////////////////////////////////////////////////////////////////////
//
// GENERATED CLASS
//
// DO NOT EDIT
//
// See sequelize-auto-ts for edits
//
////////////////////////////////////////////////////////////////////

/// <reference path="../../../index.d.ts" />

import sequelize = require('sequelize');
import types = require('./sequelize-types'); // important so we can use same fully qualified names in all generated files

export type ProductId = number;
export type CategoryId = number;
export type CustomerId = number;
export type CustomerTypeId = number;
export type EmployeeId = number;
export type OrderId = number;
export type RegionId = number;
export type ShipperId = number;
export type SupplierId = number;
export type TerritoryId = number;


var asserters:{[typeName:string]:(pojo:any, allowUndefined?:boolean) => void} = {};

//////////////////////////////////////////////////////////////////////////////
//
//
//               Alphabetical list of products
//
//
//////////////////////////////////////////////////////////////////////////////


export interface AlphabeticalListOfProductsPojo
{
    ProductID?:ProductId;
    ProductName:string;
    SupplierID?:SupplierId;
    CategoryID?:CategoryId;
    QuantityPerUnit?:string;
    UnitPrice?:number;
    UnitsInStock?:number;
    UnitsOnOrder?:number;
    ReorderLevel?:number;
    Discontinued?:Buffer;
    CategoryName:string;
}

export interface AlphabeticalListOfProductsInstance extends sequelize.Instance<AlphabeticalListOfProductsPojo>, AlphabeticalListOfProductsPojo { }

export interface AlphabeticalListOfProductsModel extends sequelize.Model<AlphabeticalListOfProductsInstance, AlphabeticalListOfProductsPojo> { }

export function AssertValidAlphabeticalListOfProducts(pojo:AlphabeticalListOfProductsPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid Alphabetical list of product provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid Alphabetical list of product provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'ProductID': assertValidFieldType('Alphabetical list of product', 'ProductID', pojo, 'number'); break;
            case 'ProductName': assertValidFieldType('Alphabetical list of product', 'ProductName', pojo, 'string'); break;
            case 'SupplierID': assertValidFieldType('Alphabetical list of product', 'SupplierID', pojo, 'number'); break;
            case 'CategoryID': assertValidFieldType('Alphabetical list of product', 'CategoryID', pojo, 'number'); break;
            case 'QuantityPerUnit': assertValidFieldType('Alphabetical list of product', 'QuantityPerUnit', pojo, 'string'); break;
            case 'UnitPrice': assertValidFieldType('Alphabetical list of product', 'UnitPrice', pojo, 'number'); break;
            case 'UnitsInStock': assertValidFieldType('Alphabetical list of product', 'UnitsInStock', pojo, 'number'); break;
            case 'UnitsOnOrder': assertValidFieldType('Alphabetical list of product', 'UnitsOnOrder', pojo, 'number'); break;
            case 'ReorderLevel': assertValidFieldType('Alphabetical list of product', 'ReorderLevel', pojo, 'number'); break;
            case 'Discontinued': assertValidFieldType('Alphabetical list of product', 'Discontinued', pojo, 'Buffer'); break;
            case 'CategoryName': assertValidFieldType('Alphabetical list of product', 'CategoryName', pojo, 'string'); break;
            default:
                throw new Error('Invalid Alphabetical list of product provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['Alphabetical list of product'] = AssertValidAlphabeticalListOfProducts;





//////////////////////////////////////////////////////////////////////////////
//
//
//               Categories
//
//
//////////////////////////////////////////////////////////////////////////////


export interface CategoriesPojo
{
    CategoryID:CategoryId;
    CategoryName:string;
    Description?:string;
    Picture?:Buffer;
}

export interface CategoriesInstance extends sequelize.Instance<CategoriesPojo>, CategoriesPojo { }

export interface CategoriesModel extends sequelize.Model<CategoriesInstance, CategoriesPojo> { }

export function AssertValidCategories(pojo:CategoriesPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid Category provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid Category provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'CategoryID': assertValidFieldType('Category', 'CategoryID', pojo, 'number'); break;
            case 'CategoryName': assertValidFieldType('Category', 'CategoryName', pojo, 'string'); break;
            case 'Description': assertValidFieldType('Category', 'Description', pojo, 'string'); break;
            case 'Picture': assertValidFieldType('Category', 'Picture', pojo, 'Buffer'); break;
            default:
                throw new Error('Invalid Category provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['Category'] = AssertValidCategories;





//////////////////////////////////////////////////////////////////////////////
//
//
//               Category Sales for 1997
//
//
//////////////////////////////////////////////////////////////////////////////


export interface CategorySalesFor1997Pojo
{
    CategoryName:string;
    CategorySales?:number;
}

export interface CategorySalesFor1997Instance extends sequelize.Instance<CategorySalesFor1997Pojo>, CategorySalesFor1997Pojo { }

export interface CategorySalesFor1997Model extends sequelize.Model<CategorySalesFor1997Instance, CategorySalesFor1997Pojo> { }

export function AssertValidCategorySalesFor1997(pojo:CategorySalesFor1997Pojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid Category Sales for 1997 provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid Category Sales for 1997 provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'CategoryName': assertValidFieldType('Category Sales for 1997', 'CategoryName', pojo, 'string'); break;
            case 'CategorySales': assertValidFieldType('Category Sales for 1997', 'CategorySales', pojo, 'number'); break;
            default:
                throw new Error('Invalid Category Sales for 1997 provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['Category Sales for 1997'] = AssertValidCategorySalesFor1997;





//////////////////////////////////////////////////////////////////////////////
//
//
//               Current Product List
//
//
//////////////////////////////////////////////////////////////////////////////


export interface CurrentProductListPojo
{
    ProductID?:ProductId;
    ProductName:string;
}

export interface CurrentProductListInstance extends sequelize.Instance<CurrentProductListPojo>, CurrentProductListPojo { }

export interface CurrentProductListModel extends sequelize.Model<CurrentProductListInstance, CurrentProductListPojo> { }

export function AssertValidCurrentProductList(pojo:CurrentProductListPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid Current Product List provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid Current Product List provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'ProductID': assertValidFieldType('Current Product List', 'ProductID', pojo, 'number'); break;
            case 'ProductName': assertValidFieldType('Current Product List', 'ProductName', pojo, 'string'); break;
            default:
                throw new Error('Invalid Current Product List provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['Current Product List'] = AssertValidCurrentProductList;





//////////////////////////////////////////////////////////////////////////////
//
//
//               Customer and Suppliers by City
//
//
//////////////////////////////////////////////////////////////////////////////


export interface CustomerAndSuppliersByCityPojo
{
    City?:string;
    CompanyName?:string;
    ContactName?:string;
    Relationship?:string;
}

export interface CustomerAndSuppliersByCityInstance extends sequelize.Instance<CustomerAndSuppliersByCityPojo>, CustomerAndSuppliersByCityPojo { }

export interface CustomerAndSuppliersByCityModel extends sequelize.Model<CustomerAndSuppliersByCityInstance, CustomerAndSuppliersByCityPojo> { }

export function AssertValidCustomerAndSuppliersByCity(pojo:CustomerAndSuppliersByCityPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid Customer and Suppliers by City provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid Customer and Suppliers by City provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'City': assertValidFieldType('Customer and Suppliers by City', 'City', pojo, 'string'); break;
            case 'CompanyName': assertValidFieldType('Customer and Suppliers by City', 'CompanyName', pojo, 'string'); break;
            case 'ContactName': assertValidFieldType('Customer and Suppliers by City', 'ContactName', pojo, 'string'); break;
            case 'Relationship': assertValidFieldType('Customer and Suppliers by City', 'Relationship', pojo, 'string'); break;
            default:
                throw new Error('Invalid Customer and Suppliers by City provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['Customer and Suppliers by City'] = AssertValidCustomerAndSuppliersByCity;





//////////////////////////////////////////////////////////////////////////////
//
//
//               CustomerCustomerDemo
//
//
//////////////////////////////////////////////////////////////////////////////


export interface CustomerCustomerDemoPojo
{
    CustomerID:CustomerId;
    CustomerTypeID:CustomerTypeId;
    customerDemographic?:CustomerDemographicsPojo;
    customer?:CustomersPojo;
}

export interface CustomerCustomerDemoInstance extends sequelize.Instance<CustomerCustomerDemoPojo>, CustomerCustomerDemoPojo { }

export interface CustomerCustomerDemoModel extends sequelize.Model<CustomerCustomerDemoInstance, CustomerCustomerDemoPojo> { }

export function AssertValidCustomerCustomerDemo(pojo:CustomerCustomerDemoPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid CustomerCustomerDemo provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid CustomerCustomerDemo provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'CustomerID': assertValidFieldType('CustomerCustomerDemo', 'CustomerID', pojo, 'string'); break;
            case 'CustomerTypeID': assertValidFieldType('CustomerCustomerDemo', 'CustomerTypeID', pojo, 'string'); break;
            case 'customerDemographic': assertValidFieldType('CustomerCustomerDemo', 'customerDemographic', pojo, 'CustomerDemographicsPojo'); break;
            case 'customer': assertValidFieldType('CustomerCustomerDemo', 'customer', pojo, 'CustomersPojo'); break;
            default:
                throw new Error('Invalid CustomerCustomerDemo provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['CustomerCustomerDemo'] = AssertValidCustomerCustomerDemo;





//////////////////////////////////////////////////////////////////////////////
//
//
//               CustomerDemographics
//
//
//////////////////////////////////////////////////////////////////////////////


export interface CustomerDemographicsPojo
{
    CustomerTypeID:CustomerTypeId;
    CustomerDesc?:string;
}

export interface CustomerDemographicsInstance extends sequelize.Instance<CustomerDemographicsPojo>, CustomerDemographicsPojo { }

export interface CustomerDemographicsModel extends sequelize.Model<CustomerDemographicsInstance, CustomerDemographicsPojo> { }

export function AssertValidCustomerDemographics(pojo:CustomerDemographicsPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid CustomerDemographic provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid CustomerDemographic provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'CustomerTypeID': assertValidFieldType('CustomerDemographic', 'CustomerTypeID', pojo, 'string'); break;
            case 'CustomerDesc': assertValidFieldType('CustomerDemographic', 'CustomerDesc', pojo, 'string'); break;
            default:
                throw new Error('Invalid CustomerDemographic provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['CustomerDemographic'] = AssertValidCustomerDemographics;





//////////////////////////////////////////////////////////////////////////////
//
//
//               Customers
//
//
//////////////////////////////////////////////////////////////////////////////


export interface CustomersPojo
{
    CustomerID:CustomerId;
    CompanyName:string;
    ContactName?:string;
    ContactTitle?:string;
    Address?:string;
    City?:string;
    Region?:string;
    PostalCode?:string;
    Country?:string;
    Phone?:string;
    Fax?:string;
}

export interface CustomersInstance extends sequelize.Instance<CustomersPojo>, CustomersPojo { }

export interface CustomersModel extends sequelize.Model<CustomersInstance, CustomersPojo> { }

export function AssertValidCustomers(pojo:CustomersPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid Customer provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid Customer provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'CustomerID': assertValidFieldType('Customer', 'CustomerID', pojo, 'string'); break;
            case 'CompanyName': assertValidFieldType('Customer', 'CompanyName', pojo, 'string'); break;
            case 'ContactName': assertValidFieldType('Customer', 'ContactName', pojo, 'string'); break;
            case 'ContactTitle': assertValidFieldType('Customer', 'ContactTitle', pojo, 'string'); break;
            case 'Address': assertValidFieldType('Customer', 'Address', pojo, 'string'); break;
            case 'City': assertValidFieldType('Customer', 'City', pojo, 'string'); break;
            case 'Region': assertValidFieldType('Customer', 'Region', pojo, 'string'); break;
            case 'PostalCode': assertValidFieldType('Customer', 'PostalCode', pojo, 'string'); break;
            case 'Country': assertValidFieldType('Customer', 'Country', pojo, 'string'); break;
            case 'Phone': assertValidFieldType('Customer', 'Phone', pojo, 'string'); break;
            case 'Fax': assertValidFieldType('Customer', 'Fax', pojo, 'string'); break;
            default:
                throw new Error('Invalid Customer provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['Customer'] = AssertValidCustomers;





//////////////////////////////////////////////////////////////////////////////
//
//
//               Employees
//
//
//////////////////////////////////////////////////////////////////////////////


export interface EmployeesPojo
{
    EmployeeID:EmployeeId;
    LastName:string;
    FirstName:string;
    Title?:string;
    TitleOfCourtesy?:string;
    BirthDate?:Date;
    HireDate?:Date;
    Address?:string;
    City?:string;
    Region?:string;
    PostalCode?:string;
    Country?:string;
    HomePhone?:string;
    Extension?:string;
    Photo?:Buffer;
    Notes:string;
    ReportsTo?:number;
    PhotoPath?:string;
    Salary?:number;
}

export interface EmployeesInstance extends sequelize.Instance<EmployeesPojo>, EmployeesPojo { }

export interface EmployeesModel extends sequelize.Model<EmployeesInstance, EmployeesPojo> { }

export function AssertValidEmployees(pojo:EmployeesPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid Employee provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid Employee provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'EmployeeID': assertValidFieldType('Employee', 'EmployeeID', pojo, 'number'); break;
            case 'LastName': assertValidFieldType('Employee', 'LastName', pojo, 'string'); break;
            case 'FirstName': assertValidFieldType('Employee', 'FirstName', pojo, 'string'); break;
            case 'Title': assertValidFieldType('Employee', 'Title', pojo, 'string'); break;
            case 'TitleOfCourtesy': assertValidFieldType('Employee', 'TitleOfCourtesy', pojo, 'string'); break;
            case 'BirthDate': assertValidFieldType('Employee', 'BirthDate', pojo, 'Date'); break;
            case 'HireDate': assertValidFieldType('Employee', 'HireDate', pojo, 'Date'); break;
            case 'Address': assertValidFieldType('Employee', 'Address', pojo, 'string'); break;
            case 'City': assertValidFieldType('Employee', 'City', pojo, 'string'); break;
            case 'Region': assertValidFieldType('Employee', 'Region', pojo, 'string'); break;
            case 'PostalCode': assertValidFieldType('Employee', 'PostalCode', pojo, 'string'); break;
            case 'Country': assertValidFieldType('Employee', 'Country', pojo, 'string'); break;
            case 'HomePhone': assertValidFieldType('Employee', 'HomePhone', pojo, 'string'); break;
            case 'Extension': assertValidFieldType('Employee', 'Extension', pojo, 'string'); break;
            case 'Photo': assertValidFieldType('Employee', 'Photo', pojo, 'Buffer'); break;
            case 'Notes': assertValidFieldType('Employee', 'Notes', pojo, 'string'); break;
            case 'ReportsTo': assertValidFieldType('Employee', 'ReportsTo', pojo, 'number'); break;
            case 'PhotoPath': assertValidFieldType('Employee', 'PhotoPath', pojo, 'string'); break;
            case 'Salary': assertValidFieldType('Employee', 'Salary', pojo, 'number'); break;
            default:
                throw new Error('Invalid Employee provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['Employee'] = AssertValidEmployees;





//////////////////////////////////////////////////////////////////////////////
//
//
//               EmployeeTerritories
//
//
//////////////////////////////////////////////////////////////////////////////


export interface EmployeeTerritoriesPojo
{
    EmployeeID:EmployeeId;
    TerritoryID:TerritoryId;
    employee?:EmployeesPojo;
    territory?:TerritoriesPojo;
}

export interface EmployeeTerritoriesInstance extends sequelize.Instance<EmployeeTerritoriesPojo>, EmployeeTerritoriesPojo { }

export interface EmployeeTerritoriesModel extends sequelize.Model<EmployeeTerritoriesInstance, EmployeeTerritoriesPojo> { }

export function AssertValidEmployeeTerritories(pojo:EmployeeTerritoriesPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid EmployeeTerritory provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid EmployeeTerritory provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'EmployeeID': assertValidFieldType('EmployeeTerritory', 'EmployeeID', pojo, 'number'); break;
            case 'TerritoryID': assertValidFieldType('EmployeeTerritory', 'TerritoryID', pojo, 'string'); break;
            case 'employee': assertValidFieldType('EmployeeTerritory', 'employee', pojo, 'EmployeesPojo'); break;
            case 'territory': assertValidFieldType('EmployeeTerritory', 'territory', pojo, 'TerritoriesPojo'); break;
            default:
                throw new Error('Invalid EmployeeTerritory provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['EmployeeTerritory'] = AssertValidEmployeeTerritories;





//////////////////////////////////////////////////////////////////////////////
//
//
//               Invoices
//
//
//////////////////////////////////////////////////////////////////////////////


export interface InvoicesPojo
{
    ShipName?:string;
    ShipAddress?:string;
    ShipCity?:string;
    ShipRegion?:string;
    ShipPostalCode?:string;
    ShipCountry?:string;
    CustomerID?:CustomerId;
    CustomerName:string;
    Address?:string;
    City?:string;
    Region?:string;
    PostalCode?:string;
    Country?:string;
    Salesperson?:number;
    OrderID?:OrderId;
    OrderDate?:Date;
    RequiredDate?:Date;
    ShippedDate?:Date;
    ShipperName:string;
    ProductID:ProductId;
    ProductName:string;
    UnitPrice?:number;
    Quantity?:number;
    Discount?:number;
    ExtendedPrice?:number;
    Freight?:number;
}

export interface InvoicesInstance extends sequelize.Instance<InvoicesPojo>, InvoicesPojo { }

export interface InvoicesModel extends sequelize.Model<InvoicesInstance, InvoicesPojo> { }

export function AssertValidInvoices(pojo:InvoicesPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid Invoice provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid Invoice provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'ShipName': assertValidFieldType('Invoice', 'ShipName', pojo, 'string'); break;
            case 'ShipAddress': assertValidFieldType('Invoice', 'ShipAddress', pojo, 'string'); break;
            case 'ShipCity': assertValidFieldType('Invoice', 'ShipCity', pojo, 'string'); break;
            case 'ShipRegion': assertValidFieldType('Invoice', 'ShipRegion', pojo, 'string'); break;
            case 'ShipPostalCode': assertValidFieldType('Invoice', 'ShipPostalCode', pojo, 'string'); break;
            case 'ShipCountry': assertValidFieldType('Invoice', 'ShipCountry', pojo, 'string'); break;
            case 'CustomerID': assertValidFieldType('Invoice', 'CustomerID', pojo, 'string'); break;
            case 'CustomerName': assertValidFieldType('Invoice', 'CustomerName', pojo, 'string'); break;
            case 'Address': assertValidFieldType('Invoice', 'Address', pojo, 'string'); break;
            case 'City': assertValidFieldType('Invoice', 'City', pojo, 'string'); break;
            case 'Region': assertValidFieldType('Invoice', 'Region', pojo, 'string'); break;
            case 'PostalCode': assertValidFieldType('Invoice', 'PostalCode', pojo, 'string'); break;
            case 'Country': assertValidFieldType('Invoice', 'Country', pojo, 'string'); break;
            case 'Salesperson': assertValidFieldType('Invoice', 'Salesperson', pojo, 'number'); break;
            case 'OrderID': assertValidFieldType('Invoice', 'OrderID', pojo, 'number'); break;
            case 'OrderDate': assertValidFieldType('Invoice', 'OrderDate', pojo, 'Date'); break;
            case 'RequiredDate': assertValidFieldType('Invoice', 'RequiredDate', pojo, 'Date'); break;
            case 'ShippedDate': assertValidFieldType('Invoice', 'ShippedDate', pojo, 'Date'); break;
            case 'ShipperName': assertValidFieldType('Invoice', 'ShipperName', pojo, 'string'); break;
            case 'ProductID': assertValidFieldType('Invoice', 'ProductID', pojo, 'number'); break;
            case 'ProductName': assertValidFieldType('Invoice', 'ProductName', pojo, 'string'); break;
            case 'UnitPrice': assertValidFieldType('Invoice', 'UnitPrice', pojo, 'number'); break;
            case 'Quantity': assertValidFieldType('Invoice', 'Quantity', pojo, 'number'); break;
            case 'Discount': assertValidFieldType('Invoice', 'Discount', pojo, 'number'); break;
            case 'ExtendedPrice': assertValidFieldType('Invoice', 'ExtendedPrice', pojo, 'number'); break;
            case 'Freight': assertValidFieldType('Invoice', 'Freight', pojo, 'number'); break;
            default:
                throw new Error('Invalid Invoice provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['Invoice'] = AssertValidInvoices;





//////////////////////////////////////////////////////////////////////////////
//
//
//               Order Details
//
//
//////////////////////////////////////////////////////////////////////////////


export interface OrderDetailsPojo
{
    OrderID:OrderId;
    ProductID:ProductId;
    UnitPrice?:number;
    Quantity?:number;
    Discount?:number;
    order?:OrdersPojo;
    product?:ProductsPojo;
}

export interface OrderDetailsInstance extends sequelize.Instance<OrderDetailsPojo>, OrderDetailsPojo { }

export interface OrderDetailsModel extends sequelize.Model<OrderDetailsInstance, OrderDetailsPojo> { }

export function AssertValidOrderDetails(pojo:OrderDetailsPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid Order Detail provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid Order Detail provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'OrderID': assertValidFieldType('Order Detail', 'OrderID', pojo, 'number'); break;
            case 'ProductID': assertValidFieldType('Order Detail', 'ProductID', pojo, 'number'); break;
            case 'UnitPrice': assertValidFieldType('Order Detail', 'UnitPrice', pojo, 'number'); break;
            case 'Quantity': assertValidFieldType('Order Detail', 'Quantity', pojo, 'number'); break;
            case 'Discount': assertValidFieldType('Order Detail', 'Discount', pojo, 'number'); break;
            case 'order': assertValidFieldType('Order Detail', 'order', pojo, 'OrdersPojo'); break;
            case 'product': assertValidFieldType('Order Detail', 'product', pojo, 'ProductsPojo'); break;
            default:
                throw new Error('Invalid Order Detail provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['Order Detail'] = AssertValidOrderDetails;





//////////////////////////////////////////////////////////////////////////////
//
//
//               Order Details Extended
//
//
//////////////////////////////////////////////////////////////////////////////


export interface OrderDetailsExtendedPojo
{
    OrderID:OrderId;
    ProductID:ProductId;
    ProductName:string;
    UnitPrice?:number;
    Quantity?:number;
    Discount?:number;
    ExtendedPrice?:number;
}

export interface OrderDetailsExtendedInstance extends sequelize.Instance<OrderDetailsExtendedPojo>, OrderDetailsExtendedPojo { }

export interface OrderDetailsExtendedModel extends sequelize.Model<OrderDetailsExtendedInstance, OrderDetailsExtendedPojo> { }

export function AssertValidOrderDetailsExtended(pojo:OrderDetailsExtendedPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid Order Details Extended provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid Order Details Extended provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'OrderID': assertValidFieldType('Order Details Extended', 'OrderID', pojo, 'number'); break;
            case 'ProductID': assertValidFieldType('Order Details Extended', 'ProductID', pojo, 'number'); break;
            case 'ProductName': assertValidFieldType('Order Details Extended', 'ProductName', pojo, 'string'); break;
            case 'UnitPrice': assertValidFieldType('Order Details Extended', 'UnitPrice', pojo, 'number'); break;
            case 'Quantity': assertValidFieldType('Order Details Extended', 'Quantity', pojo, 'number'); break;
            case 'Discount': assertValidFieldType('Order Details Extended', 'Discount', pojo, 'number'); break;
            case 'ExtendedPrice': assertValidFieldType('Order Details Extended', 'ExtendedPrice', pojo, 'number'); break;
            default:
                throw new Error('Invalid Order Details Extended provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['Order Details Extended'] = AssertValidOrderDetailsExtended;





//////////////////////////////////////////////////////////////////////////////
//
//
//               Order Subtotals
//
//
//////////////////////////////////////////////////////////////////////////////


export interface OrderSubtotalsPojo
{
    OrderID:OrderId;
    Subtotal?:number;
}

export interface OrderSubtotalsInstance extends sequelize.Instance<OrderSubtotalsPojo>, OrderSubtotalsPojo { }

export interface OrderSubtotalsModel extends sequelize.Model<OrderSubtotalsInstance, OrderSubtotalsPojo> { }

export function AssertValidOrderSubtotals(pojo:OrderSubtotalsPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid Order Subtotal provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid Order Subtotal provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'OrderID': assertValidFieldType('Order Subtotal', 'OrderID', pojo, 'number'); break;
            case 'Subtotal': assertValidFieldType('Order Subtotal', 'Subtotal', pojo, 'number'); break;
            default:
                throw new Error('Invalid Order Subtotal provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['Order Subtotal'] = AssertValidOrderSubtotals;





//////////////////////////////////////////////////////////////////////////////
//
//
//               Orders
//
//
//////////////////////////////////////////////////////////////////////////////


export interface OrdersPojo
{
    OrderID:OrderId;
    CustomerID?:CustomerId;
    EmployeeID?:EmployeeId;
    OrderDate?:Date;
    RequiredDate?:Date;
    ShippedDate?:Date;
    ShipVia?:number;
    Freight?:number;
    ShipName?:string;
    ShipAddress?:string;
    ShipCity?:string;
    ShipRegion?:string;
    ShipPostalCode?:string;
    ShipCountry?:string;
    customer?:CustomersPojo;
    employee?:EmployeesPojo;
    shipper?:ShippersPojo;
}

export interface OrdersInstance extends sequelize.Instance<OrdersPojo>, OrdersPojo { }

export interface OrdersModel extends sequelize.Model<OrdersInstance, OrdersPojo> { }

export function AssertValidOrders(pojo:OrdersPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid Order provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid Order provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'OrderID': assertValidFieldType('Order', 'OrderID', pojo, 'number'); break;
            case 'CustomerID': assertValidFieldType('Order', 'CustomerID', pojo, 'string'); break;
            case 'EmployeeID': assertValidFieldType('Order', 'EmployeeID', pojo, 'number'); break;
            case 'OrderDate': assertValidFieldType('Order', 'OrderDate', pojo, 'Date'); break;
            case 'RequiredDate': assertValidFieldType('Order', 'RequiredDate', pojo, 'Date'); break;
            case 'ShippedDate': assertValidFieldType('Order', 'ShippedDate', pojo, 'Date'); break;
            case 'ShipVia': assertValidFieldType('Order', 'ShipVia', pojo, 'number'); break;
            case 'Freight': assertValidFieldType('Order', 'Freight', pojo, 'number'); break;
            case 'ShipName': assertValidFieldType('Order', 'ShipName', pojo, 'string'); break;
            case 'ShipAddress': assertValidFieldType('Order', 'ShipAddress', pojo, 'string'); break;
            case 'ShipCity': assertValidFieldType('Order', 'ShipCity', pojo, 'string'); break;
            case 'ShipRegion': assertValidFieldType('Order', 'ShipRegion', pojo, 'string'); break;
            case 'ShipPostalCode': assertValidFieldType('Order', 'ShipPostalCode', pojo, 'string'); break;
            case 'ShipCountry': assertValidFieldType('Order', 'ShipCountry', pojo, 'string'); break;
            case 'customer': assertValidFieldType('Order', 'customer', pojo, 'CustomersPojo'); break;
            case 'employee': assertValidFieldType('Order', 'employee', pojo, 'EmployeesPojo'); break;
            case 'shipper': assertValidFieldType('Order', 'shipper', pojo, 'ShippersPojo'); break;
            default:
                throw new Error('Invalid Order provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['Order'] = AssertValidOrders;





//////////////////////////////////////////////////////////////////////////////
//
//
//               Orders Qry
//
//
//////////////////////////////////////////////////////////////////////////////


export interface OrdersQryPojo
{
    OrderID?:OrderId;
    CustomerID?:CustomerId;
    EmployeeID?:EmployeeId;
    OrderDate?:Date;
    RequiredDate?:Date;
    ShippedDate?:Date;
    ShipVia?:number;
    Freight?:number;
    ShipName?:string;
    ShipAddress?:string;
    ShipCity?:string;
    ShipRegion?:string;
    ShipPostalCode?:string;
    ShipCountry?:string;
    CompanyName:string;
    Address?:string;
    City?:string;
    Region?:string;
    PostalCode?:string;
    Country?:string;
}

export interface OrdersQryInstance extends sequelize.Instance<OrdersQryPojo>, OrdersQryPojo { }

export interface OrdersQryModel extends sequelize.Model<OrdersQryInstance, OrdersQryPojo> { }

export function AssertValidOrdersQry(pojo:OrdersQryPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid Orders Qry provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid Orders Qry provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'OrderID': assertValidFieldType('Orders Qry', 'OrderID', pojo, 'number'); break;
            case 'CustomerID': assertValidFieldType('Orders Qry', 'CustomerID', pojo, 'string'); break;
            case 'EmployeeID': assertValidFieldType('Orders Qry', 'EmployeeID', pojo, 'number'); break;
            case 'OrderDate': assertValidFieldType('Orders Qry', 'OrderDate', pojo, 'Date'); break;
            case 'RequiredDate': assertValidFieldType('Orders Qry', 'RequiredDate', pojo, 'Date'); break;
            case 'ShippedDate': assertValidFieldType('Orders Qry', 'ShippedDate', pojo, 'Date'); break;
            case 'ShipVia': assertValidFieldType('Orders Qry', 'ShipVia', pojo, 'number'); break;
            case 'Freight': assertValidFieldType('Orders Qry', 'Freight', pojo, 'number'); break;
            case 'ShipName': assertValidFieldType('Orders Qry', 'ShipName', pojo, 'string'); break;
            case 'ShipAddress': assertValidFieldType('Orders Qry', 'ShipAddress', pojo, 'string'); break;
            case 'ShipCity': assertValidFieldType('Orders Qry', 'ShipCity', pojo, 'string'); break;
            case 'ShipRegion': assertValidFieldType('Orders Qry', 'ShipRegion', pojo, 'string'); break;
            case 'ShipPostalCode': assertValidFieldType('Orders Qry', 'ShipPostalCode', pojo, 'string'); break;
            case 'ShipCountry': assertValidFieldType('Orders Qry', 'ShipCountry', pojo, 'string'); break;
            case 'CompanyName': assertValidFieldType('Orders Qry', 'CompanyName', pojo, 'string'); break;
            case 'Address': assertValidFieldType('Orders Qry', 'Address', pojo, 'string'); break;
            case 'City': assertValidFieldType('Orders Qry', 'City', pojo, 'string'); break;
            case 'Region': assertValidFieldType('Orders Qry', 'Region', pojo, 'string'); break;
            case 'PostalCode': assertValidFieldType('Orders Qry', 'PostalCode', pojo, 'string'); break;
            case 'Country': assertValidFieldType('Orders Qry', 'Country', pojo, 'string'); break;
            default:
                throw new Error('Invalid Orders Qry provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['Orders Qry'] = AssertValidOrdersQry;





//////////////////////////////////////////////////////////////////////////////
//
//
//               Product Sales for 1997
//
//
//////////////////////////////////////////////////////////////////////////////


export interface ProductSalesFor1997Pojo
{
    CategoryName:string;
    ProductName:string;
    ProductSales?:number;
}

export interface ProductSalesFor1997Instance extends sequelize.Instance<ProductSalesFor1997Pojo>, ProductSalesFor1997Pojo { }

export interface ProductSalesFor1997Model extends sequelize.Model<ProductSalesFor1997Instance, ProductSalesFor1997Pojo> { }

export function AssertValidProductSalesFor1997(pojo:ProductSalesFor1997Pojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid Product Sales for 1997 provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid Product Sales for 1997 provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'CategoryName': assertValidFieldType('Product Sales for 1997', 'CategoryName', pojo, 'string'); break;
            case 'ProductName': assertValidFieldType('Product Sales for 1997', 'ProductName', pojo, 'string'); break;
            case 'ProductSales': assertValidFieldType('Product Sales for 1997', 'ProductSales', pojo, 'number'); break;
            default:
                throw new Error('Invalid Product Sales for 1997 provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['Product Sales for 1997'] = AssertValidProductSalesFor1997;





//////////////////////////////////////////////////////////////////////////////
//
//
//               Products
//
//
//////////////////////////////////////////////////////////////////////////////


export interface ProductsPojo
{
    ProductID:ProductId;
    ProductName:string;
    SupplierID?:SupplierId;
    CategoryID?:CategoryId;
    QuantityPerUnit?:string;
    UnitPrice?:number;
    UnitsInStock?:number;
    UnitsOnOrder?:number;
    ReorderLevel?:number;
    Discontinued?:Buffer;
    category?:CategoriesPojo;
    supplier?:SuppliersPojo;
}

export interface ProductsInstance extends sequelize.Instance<ProductsPojo>, ProductsPojo { }

export interface ProductsModel extends sequelize.Model<ProductsInstance, ProductsPojo> { }

export function AssertValidProducts(pojo:ProductsPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid Product provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid Product provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'ProductID': assertValidFieldType('Product', 'ProductID', pojo, 'number'); break;
            case 'ProductName': assertValidFieldType('Product', 'ProductName', pojo, 'string'); break;
            case 'SupplierID': assertValidFieldType('Product', 'SupplierID', pojo, 'number'); break;
            case 'CategoryID': assertValidFieldType('Product', 'CategoryID', pojo, 'number'); break;
            case 'QuantityPerUnit': assertValidFieldType('Product', 'QuantityPerUnit', pojo, 'string'); break;
            case 'UnitPrice': assertValidFieldType('Product', 'UnitPrice', pojo, 'number'); break;
            case 'UnitsInStock': assertValidFieldType('Product', 'UnitsInStock', pojo, 'number'); break;
            case 'UnitsOnOrder': assertValidFieldType('Product', 'UnitsOnOrder', pojo, 'number'); break;
            case 'ReorderLevel': assertValidFieldType('Product', 'ReorderLevel', pojo, 'number'); break;
            case 'Discontinued': assertValidFieldType('Product', 'Discontinued', pojo, 'Buffer'); break;
            case 'category': assertValidFieldType('Product', 'category', pojo, 'CategoriesPojo'); break;
            case 'supplier': assertValidFieldType('Product', 'supplier', pojo, 'SuppliersPojo'); break;
            default:
                throw new Error('Invalid Product provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['Product'] = AssertValidProducts;





//////////////////////////////////////////////////////////////////////////////
//
//
//               Products Above Average Price
//
//
//////////////////////////////////////////////////////////////////////////////


export interface ProductsAboveAveragePricePojo
{
    ProductName:string;
    UnitPrice?:number;
}

export interface ProductsAboveAveragePriceInstance extends sequelize.Instance<ProductsAboveAveragePricePojo>, ProductsAboveAveragePricePojo { }

export interface ProductsAboveAveragePriceModel extends sequelize.Model<ProductsAboveAveragePriceInstance, ProductsAboveAveragePricePojo> { }

export function AssertValidProductsAboveAveragePrice(pojo:ProductsAboveAveragePricePojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid Products Above Average Price provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid Products Above Average Price provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'ProductName': assertValidFieldType('Products Above Average Price', 'ProductName', pojo, 'string'); break;
            case 'UnitPrice': assertValidFieldType('Products Above Average Price', 'UnitPrice', pojo, 'number'); break;
            default:
                throw new Error('Invalid Products Above Average Price provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['Products Above Average Price'] = AssertValidProductsAboveAveragePrice;





//////////////////////////////////////////////////////////////////////////////
//
//
//               Products by Category
//
//
//////////////////////////////////////////////////////////////////////////////


export interface ProductsByCategoryPojo
{
    CategoryName:string;
    ProductName:string;
    QuantityPerUnit?:string;
    UnitsInStock?:number;
    Discontinued?:Buffer;
}

export interface ProductsByCategoryInstance extends sequelize.Instance<ProductsByCategoryPojo>, ProductsByCategoryPojo { }

export interface ProductsByCategoryModel extends sequelize.Model<ProductsByCategoryInstance, ProductsByCategoryPojo> { }

export function AssertValidProductsByCategory(pojo:ProductsByCategoryPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid Products by Category provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid Products by Category provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'CategoryName': assertValidFieldType('Products by Category', 'CategoryName', pojo, 'string'); break;
            case 'ProductName': assertValidFieldType('Products by Category', 'ProductName', pojo, 'string'); break;
            case 'QuantityPerUnit': assertValidFieldType('Products by Category', 'QuantityPerUnit', pojo, 'string'); break;
            case 'UnitsInStock': assertValidFieldType('Products by Category', 'UnitsInStock', pojo, 'number'); break;
            case 'Discontinued': assertValidFieldType('Products by Category', 'Discontinued', pojo, 'Buffer'); break;
            default:
                throw new Error('Invalid Products by Category provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['Products by Category'] = AssertValidProductsByCategory;





//////////////////////////////////////////////////////////////////////////////
//
//
//               Quarterly Orders
//
//
//////////////////////////////////////////////////////////////////////////////


export interface QuarterlyOrdersPojo
{
    CustomerID:CustomerId;
    CompanyName:string;
    City?:string;
    Country?:string;
}

export interface QuarterlyOrdersInstance extends sequelize.Instance<QuarterlyOrdersPojo>, QuarterlyOrdersPojo { }

export interface QuarterlyOrdersModel extends sequelize.Model<QuarterlyOrdersInstance, QuarterlyOrdersPojo> { }

export function AssertValidQuarterlyOrders(pojo:QuarterlyOrdersPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid Quarterly Order provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid Quarterly Order provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'CustomerID': assertValidFieldType('Quarterly Order', 'CustomerID', pojo, 'string'); break;
            case 'CompanyName': assertValidFieldType('Quarterly Order', 'CompanyName', pojo, 'string'); break;
            case 'City': assertValidFieldType('Quarterly Order', 'City', pojo, 'string'); break;
            case 'Country': assertValidFieldType('Quarterly Order', 'Country', pojo, 'string'); break;
            default:
                throw new Error('Invalid Quarterly Order provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['Quarterly Order'] = AssertValidQuarterlyOrders;





//////////////////////////////////////////////////////////////////////////////
//
//
//               Region
//
//
//////////////////////////////////////////////////////////////////////////////


export interface RegionPojo
{
    RegionID:RegionId;
    RegionDescription:string;
}

export interface RegionInstance extends sequelize.Instance<RegionPojo>, RegionPojo { }

export interface RegionModel extends sequelize.Model<RegionInstance, RegionPojo> { }

export function AssertValidRegion(pojo:RegionPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid Region provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid Region provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'RegionID': assertValidFieldType('Region', 'RegionID', pojo, 'number'); break;
            case 'RegionDescription': assertValidFieldType('Region', 'RegionDescription', pojo, 'string'); break;
            default:
                throw new Error('Invalid Region provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['Region'] = AssertValidRegion;





//////////////////////////////////////////////////////////////////////////////
//
//
//               Sales by Category
//
//
//////////////////////////////////////////////////////////////////////////////


export interface SalesByCategoryPojo
{
    CategoryID?:CategoryId;
    CategoryName:string;
    ProductName:string;
    ProductSales?:number;
}

export interface SalesByCategoryInstance extends sequelize.Instance<SalesByCategoryPojo>, SalesByCategoryPojo { }

export interface SalesByCategoryModel extends sequelize.Model<SalesByCategoryInstance, SalesByCategoryPojo> { }

export function AssertValidSalesByCategory(pojo:SalesByCategoryPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid Sales by Category provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid Sales by Category provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'CategoryID': assertValidFieldType('Sales by Category', 'CategoryID', pojo, 'number'); break;
            case 'CategoryName': assertValidFieldType('Sales by Category', 'CategoryName', pojo, 'string'); break;
            case 'ProductName': assertValidFieldType('Sales by Category', 'ProductName', pojo, 'string'); break;
            case 'ProductSales': assertValidFieldType('Sales by Category', 'ProductSales', pojo, 'number'); break;
            default:
                throw new Error('Invalid Sales by Category provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['Sales by Category'] = AssertValidSalesByCategory;





//////////////////////////////////////////////////////////////////////////////
//
//
//               Sales Totals by Amount
//
//
//////////////////////////////////////////////////////////////////////////////


export interface SalesTotalsByAmountPojo
{
    SaleAmount?:number;
    OrderID?:OrderId;
    CompanyName:string;
    ShippedDate?:Date;
}

export interface SalesTotalsByAmountInstance extends sequelize.Instance<SalesTotalsByAmountPojo>, SalesTotalsByAmountPojo { }

export interface SalesTotalsByAmountModel extends sequelize.Model<SalesTotalsByAmountInstance, SalesTotalsByAmountPojo> { }

export function AssertValidSalesTotalsByAmount(pojo:SalesTotalsByAmountPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid Sales Totals by Amount provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid Sales Totals by Amount provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'SaleAmount': assertValidFieldType('Sales Totals by Amount', 'SaleAmount', pojo, 'number'); break;
            case 'OrderID': assertValidFieldType('Sales Totals by Amount', 'OrderID', pojo, 'number'); break;
            case 'CompanyName': assertValidFieldType('Sales Totals by Amount', 'CompanyName', pojo, 'string'); break;
            case 'ShippedDate': assertValidFieldType('Sales Totals by Amount', 'ShippedDate', pojo, 'Date'); break;
            default:
                throw new Error('Invalid Sales Totals by Amount provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['Sales Totals by Amount'] = AssertValidSalesTotalsByAmount;





//////////////////////////////////////////////////////////////////////////////
//
//
//               Shippers
//
//
//////////////////////////////////////////////////////////////////////////////


export interface ShippersPojo
{
    ShipperID:ShipperId;
    CompanyName:string;
    Phone?:string;
}

export interface ShippersInstance extends sequelize.Instance<ShippersPojo>, ShippersPojo { }

export interface ShippersModel extends sequelize.Model<ShippersInstance, ShippersPojo> { }

export function AssertValidShippers(pojo:ShippersPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid Shipper provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid Shipper provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'ShipperID': assertValidFieldType('Shipper', 'ShipperID', pojo, 'number'); break;
            case 'CompanyName': assertValidFieldType('Shipper', 'CompanyName', pojo, 'string'); break;
            case 'Phone': assertValidFieldType('Shipper', 'Phone', pojo, 'string'); break;
            default:
                throw new Error('Invalid Shipper provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['Shipper'] = AssertValidShippers;





//////////////////////////////////////////////////////////////////////////////
//
//
//               Summary of Sales by Quarter
//
//
//////////////////////////////////////////////////////////////////////////////


export interface SummaryOfSalesByQuarterPojo
{
    ShippedDate?:Date;
    OrderID?:OrderId;
    Subtotal?:number;
}

export interface SummaryOfSalesByQuarterInstance extends sequelize.Instance<SummaryOfSalesByQuarterPojo>, SummaryOfSalesByQuarterPojo { }

export interface SummaryOfSalesByQuarterModel extends sequelize.Model<SummaryOfSalesByQuarterInstance, SummaryOfSalesByQuarterPojo> { }

export function AssertValidSummaryOfSalesByQuarter(pojo:SummaryOfSalesByQuarterPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid Summary of Sales by Quarter provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid Summary of Sales by Quarter provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'ShippedDate': assertValidFieldType('Summary of Sales by Quarter', 'ShippedDate', pojo, 'Date'); break;
            case 'OrderID': assertValidFieldType('Summary of Sales by Quarter', 'OrderID', pojo, 'number'); break;
            case 'Subtotal': assertValidFieldType('Summary of Sales by Quarter', 'Subtotal', pojo, 'number'); break;
            default:
                throw new Error('Invalid Summary of Sales by Quarter provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['Summary of Sales by Quarter'] = AssertValidSummaryOfSalesByQuarter;





//////////////////////////////////////////////////////////////////////////////
//
//
//               Summary of Sales by Year
//
//
//////////////////////////////////////////////////////////////////////////////


export interface SummaryOfSalesByYearPojo
{
    ShippedDate?:Date;
    OrderID?:OrderId;
    Subtotal?:number;
}

export interface SummaryOfSalesByYearInstance extends sequelize.Instance<SummaryOfSalesByYearPojo>, SummaryOfSalesByYearPojo { }

export interface SummaryOfSalesByYearModel extends sequelize.Model<SummaryOfSalesByYearInstance, SummaryOfSalesByYearPojo> { }

export function AssertValidSummaryOfSalesByYear(pojo:SummaryOfSalesByYearPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid Summary of Sales by Year provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid Summary of Sales by Year provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'ShippedDate': assertValidFieldType('Summary of Sales by Year', 'ShippedDate', pojo, 'Date'); break;
            case 'OrderID': assertValidFieldType('Summary of Sales by Year', 'OrderID', pojo, 'number'); break;
            case 'Subtotal': assertValidFieldType('Summary of Sales by Year', 'Subtotal', pojo, 'number'); break;
            default:
                throw new Error('Invalid Summary of Sales by Year provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['Summary of Sales by Year'] = AssertValidSummaryOfSalesByYear;





//////////////////////////////////////////////////////////////////////////////
//
//
//               Suppliers
//
//
//////////////////////////////////////////////////////////////////////////////


export interface SuppliersPojo
{
    SupplierID:SupplierId;
    CompanyName:string;
    ContactName?:string;
    ContactTitle?:string;
    Address?:string;
    City?:string;
    Region?:string;
    PostalCode?:string;
    Country?:string;
    Phone?:string;
    Fax?:string;
    HomePage?:string;
}

export interface SuppliersInstance extends sequelize.Instance<SuppliersPojo>, SuppliersPojo { }

export interface SuppliersModel extends sequelize.Model<SuppliersInstance, SuppliersPojo> { }

export function AssertValidSuppliers(pojo:SuppliersPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid Supplier provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid Supplier provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'SupplierID': assertValidFieldType('Supplier', 'SupplierID', pojo, 'number'); break;
            case 'CompanyName': assertValidFieldType('Supplier', 'CompanyName', pojo, 'string'); break;
            case 'ContactName': assertValidFieldType('Supplier', 'ContactName', pojo, 'string'); break;
            case 'ContactTitle': assertValidFieldType('Supplier', 'ContactTitle', pojo, 'string'); break;
            case 'Address': assertValidFieldType('Supplier', 'Address', pojo, 'string'); break;
            case 'City': assertValidFieldType('Supplier', 'City', pojo, 'string'); break;
            case 'Region': assertValidFieldType('Supplier', 'Region', pojo, 'string'); break;
            case 'PostalCode': assertValidFieldType('Supplier', 'PostalCode', pojo, 'string'); break;
            case 'Country': assertValidFieldType('Supplier', 'Country', pojo, 'string'); break;
            case 'Phone': assertValidFieldType('Supplier', 'Phone', pojo, 'string'); break;
            case 'Fax': assertValidFieldType('Supplier', 'Fax', pojo, 'string'); break;
            case 'HomePage': assertValidFieldType('Supplier', 'HomePage', pojo, 'string'); break;
            default:
                throw new Error('Invalid Supplier provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['Supplier'] = AssertValidSuppliers;





//////////////////////////////////////////////////////////////////////////////
//
//
//               Territories
//
//
//////////////////////////////////////////////////////////////////////////////


export interface TerritoriesPojo
{
    TerritoryID:TerritoryId;
    TerritoryDescription:string;
    RegionID:RegionId;
    region?:RegionPojo;
}

export interface TerritoriesInstance extends sequelize.Instance<TerritoriesPojo>, TerritoriesPojo { }

export interface TerritoriesModel extends sequelize.Model<TerritoriesInstance, TerritoriesPojo> { }

export function AssertValidTerritories(pojo:TerritoriesPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid Territory provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid Territory provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'TerritoryID': assertValidFieldType('Territory', 'TerritoryID', pojo, 'string'); break;
            case 'TerritoryDescription': assertValidFieldType('Territory', 'TerritoryDescription', pojo, 'string'); break;
            case 'RegionID': assertValidFieldType('Territory', 'RegionID', pojo, 'number'); break;
            case 'region': assertValidFieldType('Territory', 'region', pojo, 'RegionPojo'); break;
            default:
                throw new Error('Invalid Territory provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['Territory'] = AssertValidTerritories;





var BOOLEAN_TYPE:string = typeof(true);
var NUMBER_TYPE:string = typeof(1);
var STRING_TYPE:string = typeof('');
var FUNCTION_TYPE:string = typeof(function() {});
var DATE_EXPECTED_TYPE:string = 'Date';
var BUFFER_EXPECTED_TYPE:string = 'Buffer';
var BUFFER_EXISTS:boolean = typeof Buffer !== 'undefined'; //in node exists, in js not, so only validate in node

function assertValidFieldType(pojoName:string, fieldName:string, pojo:any, expectedType:string):void {

    var value:any = pojo[fieldName];
    var actualType:string = typeof value;

    if (value === undefined || value === null) {
        return;
    }

    switch(expectedType) {
        case BOOLEAN_TYPE:
            if (actualType !== BOOLEAN_TYPE && actualType !== NUMBER_TYPE) {
                err();
            }
            pojo[fieldName] = Boolean(value);
            return;

        case NUMBER_TYPE:
            if (actualType === NUMBER_TYPE) {
                return;
            }
            if (actualType === STRING_TYPE) {
                var newValue:number = parseFloat(value);
                if (isNaN(newValue)) {
                    err();
                }
                pojo[fieldName] = newValue;
            }
            return;

        case STRING_TYPE:
            if (actualType !== STRING_TYPE) {
                pojo[fieldName] = value.toString();
            }
            return;

        case DATE_EXPECTED_TYPE:
            var getTime:Function = value.getTime;
            if (typeof getTime === FUNCTION_TYPE) {
                var timeValue:number = value.getTime();
                if (isNaN(timeValue)){
                    err();
                }
                if (!(value instanceof Date)) {
                    pojo[fieldName] = new Date(timeValue);
                }
                return;
            }

            if (actualType === STRING_TYPE) {
                var newDate:Date = new Date(value);
                if (!isNaN(newDate.getTime())) {
                    pojo[fieldName] = newDate;
                    return;
                }
            }
            err();
            return;

        case BUFFER_EXPECTED_TYPE:
            if (!BUFFER_EXISTS) {
                return;
            }

            if (!(value instanceof Buffer)) {
                err();
            }
            return;
    }

    // one pojo of array of array of pojos?
    if (expectedType.length > 3 && expectedType.substr(expectedType.length - 2, 2) === '[]') {
        var individualPojoType:string = expectedType.substr(0, expectedType.length - 6);

        var asserter:Function = asserters[individualPojoType];
        if (typeof asserter !== FUNCTION_TYPE) {
            err();
        }

        if (isNaN(value.length)) {
            err();
        }
        for(var i:number = 0; i<value.length; i++) {
            try {
                asserter(value[i], true);
            } catch(e) {
                err('Error at index \'' + i + '\': ' + e.message);
            }
        }

        // all instances valid
        return;
    }

    var asserter:Function = asserters[expectedType.substr(0, expectedType.length - 4)];
    if (typeof asserter !== FUNCTION_TYPE) {
        expectedTypeErr();
    }

    try {
        asserter(value, true);
    } catch(e) {
        err(e.message);
    }

    function err(extraMessage?:string):void {
        var message:string = 'Invalid ' + pojoName + ' provided. Field \'' + fieldName + '\' with value \'' + safeValue(value) + '\' is not a valid \'' + expectedType + '\'.';
        if (extraMessage !== undefined) {
            message += ' ' + extraMessage;
        }
        throw new Error(message);
    }

    function expectedTypeErr():void {
        throw new Error('Cannot validate \'' + pojoName + '\' field \'' + fieldName + '\' since expected type provided \'' + expectedType + '\' is not understood.');
    }
}

function safeValue(value:any):string {

    if (value === undefined || value === null) {
        return typeof value;
    }

    var s:string = value.toString();
    return s.substr(0, 100);
}

export interface Reference {
    tableName:string;
    primaryKey:string;
    foreignKey:string;
    as:string;
}
