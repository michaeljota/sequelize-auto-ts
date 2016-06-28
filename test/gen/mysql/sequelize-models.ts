////////////////////////////////////////////////////////////////////
//
// GENERATED CLASS
//
// DO NOT EDIT
//
// See sequelize-auto-ts for edits
//
////////////////////////////////////////////////////////////////////

/// <reference path="../../../typings/index.d.ts" />

import sequelize = require('sequelize');
import types = require('./sequelize-types');

var Sequelize:sequelize.SequelizeStatic = require('sequelize');

export var initialized:boolean = false;
export var SEQUELIZE:sequelize.Sequelize;

export var AlphabeticalListOfProductsModel:types.AlphabeticalListOfProductsModel;
export var CategoriesModel:types.CategoriesModel;
export var CategorySalesFor1997Model:types.CategorySalesFor1997Model;
export var CurrentProductListModel:types.CurrentProductListModel;
export var CustomerAndSuppliersByCityModel:types.CustomerAndSuppliersByCityModel;
export var CustomerCustomerDemoModel:types.CustomerCustomerDemoModel;
export var CustomerDemographicsModel:types.CustomerDemographicsModel;
export var CustomersModel:types.CustomersModel;
export var EmployeesModel:types.EmployeesModel;
export var EmployeeTerritoriesModel:types.EmployeeTerritoriesModel;
export var InvoicesModel:types.InvoicesModel;
export var OrderDetailsModel:types.OrderDetailsModel;
export var OrderDetailsExtendedModel:types.OrderDetailsExtendedModel;
export var OrderSubtotalsModel:types.OrderSubtotalsModel;
export var OrdersModel:types.OrdersModel;
export var OrdersQryModel:types.OrdersQryModel;
export var ProductSalesFor1997Model:types.ProductSalesFor1997Model;
export var ProductsModel:types.ProductsModel;
export var ProductsAboveAveragePriceModel:types.ProductsAboveAveragePriceModel;
export var ProductsByCategoryModel:types.ProductsByCategoryModel;
export var QuarterlyOrdersModel:types.QuarterlyOrdersModel;
export var RegionModel:types.RegionModel;
export var SalesByCategoryModel:types.SalesByCategoryModel;
export var SalesTotalsByAmountModel:types.SalesTotalsByAmountModel;
export var ShippersModel:types.ShippersModel;
export var SummaryOfSalesByQuarterModel:types.SummaryOfSalesByQuarterModel;
export var SummaryOfSalesByYearModel:types.SummaryOfSalesByYearModel;
export var SuppliersModel:types.SuppliersModel;
export var TerritoriesModel:types.TerritoriesModel;


export function initialize(database:string, username:string, password:string, options:sequelize.Options):any
{
    if (initialized)
    {
        return;
    }

    SEQUELIZE = new Sequelize(database, username, password, options);

    AlphabeticalListOfProductsModel = <types.AlphabeticalListOfProductsModel> SEQUELIZE.define<types.AlphabeticalListOfProductsInstance, types.AlphabeticalListOfProductsPojo>('Alphabetical list of product', {
        'ProductID': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'ProductName': {type: Sequelize.STRING, allowNull: false},
        'SupplierID': {type: Sequelize.INTEGER},
        'CategoryID': {type: Sequelize.INTEGER},
        'QuantityPerUnit': {type: Sequelize.STRING},
        'UnitPrice': {type: Sequelize.DECIMAL, defaultValue: "0.0000"},
        'UnitsInStock': {type: Sequelize.INTEGER, defaultValue: "0"},
        'UnitsOnOrder': {type: Sequelize.INTEGER, defaultValue: "0"},
        'ReorderLevel': {type: Sequelize.INTEGER, defaultValue: "0"},
        'Discontinued': {type: Sequelize.BLOB, allowNull: false, defaultValue: "b'0'"},
        'CategoryName': {type: Sequelize.STRING, allowNull: false}
        },
        {
            classMethods: {
                GetAlphabeticalListOfProducts:(alphabetical_list_of_product:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(alphabetical_list_of_product);
                    if (isNaN(id)) {
                        if (alphabetical_list_of_product['ProductID'] !== undefined) { where['ProductID'] = alphabetical_list_of_product['ProductID']}
                        if (alphabetical_list_of_product['ProductName'] !== undefined) { where['ProductName'] = alphabetical_list_of_product['ProductName']}
                        if (alphabetical_list_of_product['SupplierID'] !== undefined) { where['SupplierID'] = alphabetical_list_of_product['SupplierID']}
                        if (alphabetical_list_of_product['CategoryID'] !== undefined) { where['CategoryID'] = alphabetical_list_of_product['CategoryID']}
                        if (alphabetical_list_of_product['QuantityPerUnit'] !== undefined) { where['QuantityPerUnit'] = alphabetical_list_of_product['QuantityPerUnit']}
                        if (alphabetical_list_of_product['UnitPrice'] !== undefined) { where['UnitPrice'] = alphabetical_list_of_product['UnitPrice']}
                        if (alphabetical_list_of_product['UnitsInStock'] !== undefined) { where['UnitsInStock'] = alphabetical_list_of_product['UnitsInStock']}
                        if (alphabetical_list_of_product['UnitsOnOrder'] !== undefined) { where['UnitsOnOrder'] = alphabetical_list_of_product['UnitsOnOrder']}
                        if (alphabetical_list_of_product['ReorderLevel'] !== undefined) { where['ReorderLevel'] = alphabetical_list_of_product['ReorderLevel']}
                        if (alphabetical_list_of_product['Discontinued'] !== undefined) { where['Discontinued'] = alphabetical_list_of_product['Discontinued']}
                        if (alphabetical_list_of_product['CategoryName'] !== undefined) { where['CategoryName'] = alphabetical_list_of_product['CategoryName']}
                    } else {
                        where['ProductID'] = id;
                    }
                    return AlphabeticalListOfProductsModel.find({where: where});
                }
            }
        });
    
    CategoriesModel = <types.CategoriesModel> SEQUELIZE.define<types.CategoriesInstance, types.CategoriesPojo>('Category', {
        'CategoryID': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'CategoryName': {type: Sequelize.STRING, allowNull: false},
        'Description': {type: Sequelize.STRING},
        'Picture': {type: Sequelize.BLOB}
        },
        {
            classMethods: {
                GetCategories:(category:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(category);
                    if (isNaN(id)) {
                        if (category['CategoryID'] !== undefined) { where['CategoryID'] = category['CategoryID']}
                        if (category['CategoryName'] !== undefined) { where['CategoryName'] = category['CategoryName']}
                        if (category['Description'] !== undefined) { where['Description'] = category['Description']}
                        if (category['Picture'] !== undefined) { where['Picture'] = category['Picture']}
                    } else {
                        where['CategoryID'] = id;
                    }
                    return CategoriesModel.find({where: where});
                }
            }
        });
    
    CategorySalesFor1997Model = <types.CategorySalesFor1997Model> SEQUELIZE.define<types.CategorySalesFor1997Instance, types.CategorySalesFor1997Pojo>('Category Sales for 1997', {
        'CategoryName': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'CategorySales': {type: Sequelize.DECIMAL}
        },
        {
            classMethods: {
                GetCategorySalesFor1997:(category_sales_for_1997:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(category_sales_for_1997);
                    if (isNaN(id)) {
                        if (category_sales_for_1997['CategoryName'] !== undefined) { where['CategoryName'] = category_sales_for_1997['CategoryName']}
                        if (category_sales_for_1997['CategorySales'] !== undefined) { where['CategorySales'] = category_sales_for_1997['CategorySales']}
                    } else {
                        where['!!cannotFindIdFieldOnCategory Sales for 1997!!'] = id;
                    }
                    return CategorySalesFor1997Model.find({where: where});
                }
            }
        });
    
    CurrentProductListModel = <types.CurrentProductListModel> SEQUELIZE.define<types.CurrentProductListInstance, types.CurrentProductListPojo>('Current Product List', {
        'ProductID': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'ProductName': {type: Sequelize.STRING, allowNull: false}
        },
        {
            classMethods: {
                GetCurrentProductList:(current_product_list:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(current_product_list);
                    if (isNaN(id)) {
                        if (current_product_list['ProductID'] !== undefined) { where['ProductID'] = current_product_list['ProductID']}
                        if (current_product_list['ProductName'] !== undefined) { where['ProductName'] = current_product_list['ProductName']}
                    } else {
                        where['ProductID'] = id;
                    }
                    return CurrentProductListModel.find({where: where});
                }
            }
        });
    
    CustomerAndSuppliersByCityModel = <types.CustomerAndSuppliersByCityModel> SEQUELIZE.define<types.CustomerAndSuppliersByCityInstance, types.CustomerAndSuppliersByCityPojo>('Customer and Suppliers by City', {
        'City': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'CompanyName': {type: Sequelize.STRING, allowNull: false, defaultValue: ""},
        'ContactName': {type: Sequelize.STRING},
        'Relationship': {type: Sequelize.STRING, allowNull: false, defaultValue: ""}
        },
        {
            classMethods: {
                GetCustomerAndSuppliersByCity:(customer_and_suppliers_by_city:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(customer_and_suppliers_by_city);
                    if (isNaN(id)) {
                        if (customer_and_suppliers_by_city['City'] !== undefined) { where['City'] = customer_and_suppliers_by_city['City']}
                        if (customer_and_suppliers_by_city['CompanyName'] !== undefined) { where['CompanyName'] = customer_and_suppliers_by_city['CompanyName']}
                        if (customer_and_suppliers_by_city['ContactName'] !== undefined) { where['ContactName'] = customer_and_suppliers_by_city['ContactName']}
                        if (customer_and_suppliers_by_city['Relationship'] !== undefined) { where['Relationship'] = customer_and_suppliers_by_city['Relationship']}
                    } else {
                        where['!!cannotFindIdFieldOnCustomer and Suppliers by City!!'] = id;
                    }
                    return CustomerAndSuppliersByCityModel.find({where: where});
                }
            }
        });
    
    CustomerCustomerDemoModel = <types.CustomerCustomerDemoModel> SEQUELIZE.define<types.CustomerCustomerDemoInstance, types.CustomerCustomerDemoPojo>('CustomerCustomerDemo', {
        'CustomerID': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'CustomerTypeID': {type: Sequelize.STRING, allowNull: false}
        },
        {
            classMethods: {
                GetCustomerCustomerDemo:(customer_customer_demo:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(customer_customer_demo);
                    if (isNaN(id)) {
                        if (customer_customer_demo['CustomerID'] !== undefined) { where['CustomerID'] = customer_customer_demo['CustomerID']}
                        if (customer_customer_demo['CustomerTypeID'] !== undefined) { where['CustomerTypeID'] = customer_customer_demo['CustomerTypeID']}
                    } else {
                        where['CustomerID'] = id;
                    }
                    return CustomerCustomerDemoModel.find({where: where});
                }
            }
        });
    
    CustomerDemographicsModel = <types.CustomerDemographicsModel> SEQUELIZE.define<types.CustomerDemographicsInstance, types.CustomerDemographicsPojo>('CustomerDemographic', {
        'CustomerTypeID': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'CustomerDesc': {type: Sequelize.STRING}
        },
        {
            classMethods: {
                GetCustomerDemographics:(customer_demographic:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(customer_demographic);
                    if (isNaN(id)) {
                        if (customer_demographic['CustomerTypeID'] !== undefined) { where['CustomerTypeID'] = customer_demographic['CustomerTypeID']}
                        if (customer_demographic['CustomerDesc'] !== undefined) { where['CustomerDesc'] = customer_demographic['CustomerDesc']}
                    } else {
                        where['CustomerTypeID'] = id;
                    }
                    return CustomerDemographicsModel.find({where: where});
                }
            }
        });
    
    CustomersModel = <types.CustomersModel> SEQUELIZE.define<types.CustomersInstance, types.CustomersPojo>('Customer', {
        'CustomerID': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'CompanyName': {type: Sequelize.STRING, allowNull: false},
        'ContactName': {type: Sequelize.STRING},
        'ContactTitle': {type: Sequelize.STRING},
        'Address': {type: Sequelize.STRING},
        'City': {type: Sequelize.STRING},
        'Region': {type: Sequelize.STRING},
        'PostalCode': {type: Sequelize.STRING},
        'Country': {type: Sequelize.STRING},
        'Phone': {type: Sequelize.STRING},
        'Fax': {type: Sequelize.STRING}
        },
        {
            classMethods: {
                GetCustomers:(customer:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(customer);
                    if (isNaN(id)) {
                        if (customer['CustomerID'] !== undefined) { where['CustomerID'] = customer['CustomerID']}
                        if (customer['CompanyName'] !== undefined) { where['CompanyName'] = customer['CompanyName']}
                        if (customer['ContactName'] !== undefined) { where['ContactName'] = customer['ContactName']}
                        if (customer['ContactTitle'] !== undefined) { where['ContactTitle'] = customer['ContactTitle']}
                        if (customer['Address'] !== undefined) { where['Address'] = customer['Address']}
                        if (customer['City'] !== undefined) { where['City'] = customer['City']}
                        if (customer['Region'] !== undefined) { where['Region'] = customer['Region']}
                        if (customer['PostalCode'] !== undefined) { where['PostalCode'] = customer['PostalCode']}
                        if (customer['Country'] !== undefined) { where['Country'] = customer['Country']}
                        if (customer['Phone'] !== undefined) { where['Phone'] = customer['Phone']}
                        if (customer['Fax'] !== undefined) { where['Fax'] = customer['Fax']}
                    } else {
                        where['CustomerID'] = id;
                    }
                    return CustomersModel.find({where: where});
                }
            }
        });
    
    EmployeesModel = <types.EmployeesModel> SEQUELIZE.define<types.EmployeesInstance, types.EmployeesPojo>('Employee', {
        'EmployeeID': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'LastName': {type: Sequelize.STRING, allowNull: false},
        'FirstName': {type: Sequelize.STRING, allowNull: false},
        'Title': {type: Sequelize.STRING},
        'TitleOfCourtesy': {type: Sequelize.STRING},
        'BirthDate': {type: Sequelize.DATE},
        'HireDate': {type: Sequelize.DATE},
        'Address': {type: Sequelize.STRING},
        'City': {type: Sequelize.STRING},
        'Region': {type: Sequelize.STRING},
        'PostalCode': {type: Sequelize.STRING},
        'Country': {type: Sequelize.STRING},
        'HomePhone': {type: Sequelize.STRING},
        'Extension': {type: Sequelize.STRING},
        'Photo': {type: Sequelize.BLOB},
        'Notes': {type: Sequelize.STRING, allowNull: false},
        'ReportsTo': {type: Sequelize.INTEGER},
        'PhotoPath': {type: Sequelize.STRING},
        'Salary': {type: Sequelize.DECIMAL}
        },
        {
            classMethods: {
                GetEmployees:(employee:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(employee);
                    if (isNaN(id)) {
                        if (employee['EmployeeID'] !== undefined) { where['EmployeeID'] = employee['EmployeeID']}
                        if (employee['LastName'] !== undefined) { where['LastName'] = employee['LastName']}
                        if (employee['FirstName'] !== undefined) { where['FirstName'] = employee['FirstName']}
                        if (employee['Title'] !== undefined) { where['Title'] = employee['Title']}
                        if (employee['TitleOfCourtesy'] !== undefined) { where['TitleOfCourtesy'] = employee['TitleOfCourtesy']}
                        if (employee['BirthDate'] !== undefined) { where['BirthDate'] = employee['BirthDate']}
                        if (employee['HireDate'] !== undefined) { where['HireDate'] = employee['HireDate']}
                        if (employee['Address'] !== undefined) { where['Address'] = employee['Address']}
                        if (employee['City'] !== undefined) { where['City'] = employee['City']}
                        if (employee['Region'] !== undefined) { where['Region'] = employee['Region']}
                        if (employee['PostalCode'] !== undefined) { where['PostalCode'] = employee['PostalCode']}
                        if (employee['Country'] !== undefined) { where['Country'] = employee['Country']}
                        if (employee['HomePhone'] !== undefined) { where['HomePhone'] = employee['HomePhone']}
                        if (employee['Extension'] !== undefined) { where['Extension'] = employee['Extension']}
                        if (employee['Photo'] !== undefined) { where['Photo'] = employee['Photo']}
                        if (employee['Notes'] !== undefined) { where['Notes'] = employee['Notes']}
                        if (employee['ReportsTo'] !== undefined) { where['ReportsTo'] = employee['ReportsTo']}
                        if (employee['PhotoPath'] !== undefined) { where['PhotoPath'] = employee['PhotoPath']}
                        if (employee['Salary'] !== undefined) { where['Salary'] = employee['Salary']}
                    } else {
                        where['EmployeeID'] = id;
                    }
                    return EmployeesModel.find({where: where});
                }
            }
        });
    
    EmployeeTerritoriesModel = <types.EmployeeTerritoriesModel> SEQUELIZE.define<types.EmployeeTerritoriesInstance, types.EmployeeTerritoriesPojo>('EmployeeTerritory', {
        'EmployeeID': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'TerritoryID': {type: Sequelize.STRING, allowNull: false}
        },
        {
            classMethods: {
                GetEmployeeTerritories:(employee_territory:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(employee_territory);
                    if (isNaN(id)) {
                        if (employee_territory['EmployeeID'] !== undefined) { where['EmployeeID'] = employee_territory['EmployeeID']}
                        if (employee_territory['TerritoryID'] !== undefined) { where['TerritoryID'] = employee_territory['TerritoryID']}
                    } else {
                        where['EmployeeID'] = id;
                    }
                    return EmployeeTerritoriesModel.find({where: where});
                }
            }
        });
    
    InvoicesModel = <types.InvoicesModel> SEQUELIZE.define<types.InvoicesInstance, types.InvoicesPojo>('Invoice', {
        'ShipName': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'ShipAddress': {type: Sequelize.STRING},
        'ShipCity': {type: Sequelize.STRING},
        'ShipRegion': {type: Sequelize.STRING},
        'ShipPostalCode': {type: Sequelize.STRING},
        'ShipCountry': {type: Sequelize.STRING},
        'CustomerID': {type: Sequelize.STRING},
        'CustomerName': {type: Sequelize.STRING, allowNull: false},
        'Address': {type: Sequelize.STRING},
        'City': {type: Sequelize.STRING},
        'Region': {type: Sequelize.STRING},
        'PostalCode': {type: Sequelize.STRING},
        'Country': {type: Sequelize.STRING},
        'Salesperson': {type: Sequelize.DECIMAL, allowNull: false, defaultValue: "0"},
        'OrderID': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'OrderDate': {type: Sequelize.DATE},
        'RequiredDate': {type: Sequelize.DATE},
        'ShippedDate': {type: Sequelize.DATE},
        'ShipperName': {type: Sequelize.STRING, allowNull: false},
        'ProductID': {type: Sequelize.INTEGER, allowNull: false},
        'ProductName': {type: Sequelize.STRING, allowNull: false},
        'UnitPrice': {type: Sequelize.DECIMAL, allowNull: false, defaultValue: "0.0000"},
        'Quantity': {type: Sequelize.INTEGER, allowNull: false, defaultValue: 1},
        'Discount': {type: Sequelize.DECIMAL, allowNull: false, defaultValue: "0"},
        'ExtendedPrice': {type: Sequelize.DECIMAL},
        'Freight': {type: Sequelize.DECIMAL, defaultValue: "0.0000"}
        },
        {
            classMethods: {
                GetInvoices:(invoice:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(invoice);
                    if (isNaN(id)) {
                        if (invoice['ShipName'] !== undefined) { where['ShipName'] = invoice['ShipName']}
                        if (invoice['ShipAddress'] !== undefined) { where['ShipAddress'] = invoice['ShipAddress']}
                        if (invoice['ShipCity'] !== undefined) { where['ShipCity'] = invoice['ShipCity']}
                        if (invoice['ShipRegion'] !== undefined) { where['ShipRegion'] = invoice['ShipRegion']}
                        if (invoice['ShipPostalCode'] !== undefined) { where['ShipPostalCode'] = invoice['ShipPostalCode']}
                        if (invoice['ShipCountry'] !== undefined) { where['ShipCountry'] = invoice['ShipCountry']}
                        if (invoice['CustomerID'] !== undefined) { where['CustomerID'] = invoice['CustomerID']}
                        if (invoice['CustomerName'] !== undefined) { where['CustomerName'] = invoice['CustomerName']}
                        if (invoice['Address'] !== undefined) { where['Address'] = invoice['Address']}
                        if (invoice['City'] !== undefined) { where['City'] = invoice['City']}
                        if (invoice['Region'] !== undefined) { where['Region'] = invoice['Region']}
                        if (invoice['PostalCode'] !== undefined) { where['PostalCode'] = invoice['PostalCode']}
                        if (invoice['Country'] !== undefined) { where['Country'] = invoice['Country']}
                        if (invoice['Salesperson'] !== undefined) { where['Salesperson'] = invoice['Salesperson']}
                        if (invoice['OrderID'] !== undefined) { where['OrderID'] = invoice['OrderID']}
                        if (invoice['OrderDate'] !== undefined) { where['OrderDate'] = invoice['OrderDate']}
                        if (invoice['RequiredDate'] !== undefined) { where['RequiredDate'] = invoice['RequiredDate']}
                        if (invoice['ShippedDate'] !== undefined) { where['ShippedDate'] = invoice['ShippedDate']}
                        if (invoice['ShipperName'] !== undefined) { where['ShipperName'] = invoice['ShipperName']}
                        if (invoice['ProductID'] !== undefined) { where['ProductID'] = invoice['ProductID']}
                        if (invoice['ProductName'] !== undefined) { where['ProductName'] = invoice['ProductName']}
                        if (invoice['UnitPrice'] !== undefined) { where['UnitPrice'] = invoice['UnitPrice']}
                        if (invoice['Quantity'] !== undefined) { where['Quantity'] = invoice['Quantity']}
                        if (invoice['Discount'] !== undefined) { where['Discount'] = invoice['Discount']}
                        if (invoice['ExtendedPrice'] !== undefined) { where['ExtendedPrice'] = invoice['ExtendedPrice']}
                        if (invoice['Freight'] !== undefined) { where['Freight'] = invoice['Freight']}
                    } else {
                        where['CustomerID'] = id;
                    }
                    return InvoicesModel.find({where: where});
                }
            }
        });
    
    OrderDetailsModel = <types.OrderDetailsModel> SEQUELIZE.define<types.OrderDetailsInstance, types.OrderDetailsPojo>('Order Detail', {
        'OrderID': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'ProductID': {type: Sequelize.INTEGER, allowNull: false},
        'UnitPrice': {type: Sequelize.DECIMAL, allowNull: false, defaultValue: "0.0000"},
        'Quantity': {type: Sequelize.INTEGER, allowNull: false, defaultValue: 1},
        'Discount': {type: Sequelize.DECIMAL, allowNull: false, defaultValue: "0"}
        },
        {
            classMethods: {
                GetOrderDetails:(order_detail:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(order_detail);
                    if (isNaN(id)) {
                        if (order_detail['OrderID'] !== undefined) { where['OrderID'] = order_detail['OrderID']}
                        if (order_detail['ProductID'] !== undefined) { where['ProductID'] = order_detail['ProductID']}
                        if (order_detail['UnitPrice'] !== undefined) { where['UnitPrice'] = order_detail['UnitPrice']}
                        if (order_detail['Quantity'] !== undefined) { where['Quantity'] = order_detail['Quantity']}
                        if (order_detail['Discount'] !== undefined) { where['Discount'] = order_detail['Discount']}
                    } else {
                        where['OrderID'] = id;
                    }
                    return OrderDetailsModel.find({where: where});
                }
            }
        });
    
    OrderDetailsExtendedModel = <types.OrderDetailsExtendedModel> SEQUELIZE.define<types.OrderDetailsExtendedInstance, types.OrderDetailsExtendedPojo>('Order Details Extended', {
        'OrderID': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'ProductID': {type: Sequelize.INTEGER, allowNull: false},
        'ProductName': {type: Sequelize.STRING, allowNull: false},
        'UnitPrice': {type: Sequelize.DECIMAL, allowNull: false, defaultValue: "0.0000"},
        'Quantity': {type: Sequelize.INTEGER, allowNull: false, defaultValue: 1},
        'Discount': {type: Sequelize.DECIMAL, allowNull: false, defaultValue: "0"},
        'ExtendedPrice': {type: Sequelize.DECIMAL}
        },
        {
            classMethods: {
                GetOrderDetailsExtended:(order_details_extended:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(order_details_extended);
                    if (isNaN(id)) {
                        if (order_details_extended['OrderID'] !== undefined) { where['OrderID'] = order_details_extended['OrderID']}
                        if (order_details_extended['ProductID'] !== undefined) { where['ProductID'] = order_details_extended['ProductID']}
                        if (order_details_extended['ProductName'] !== undefined) { where['ProductName'] = order_details_extended['ProductName']}
                        if (order_details_extended['UnitPrice'] !== undefined) { where['UnitPrice'] = order_details_extended['UnitPrice']}
                        if (order_details_extended['Quantity'] !== undefined) { where['Quantity'] = order_details_extended['Quantity']}
                        if (order_details_extended['Discount'] !== undefined) { where['Discount'] = order_details_extended['Discount']}
                        if (order_details_extended['ExtendedPrice'] !== undefined) { where['ExtendedPrice'] = order_details_extended['ExtendedPrice']}
                    } else {
                        where['OrderID'] = id;
                    }
                    return OrderDetailsExtendedModel.find({where: where});
                }
            }
        });
    
    OrderSubtotalsModel = <types.OrderSubtotalsModel> SEQUELIZE.define<types.OrderSubtotalsInstance, types.OrderSubtotalsPojo>('Order Subtotal', {
        'OrderID': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'Subtotal': {type: Sequelize.DECIMAL}
        },
        {
            classMethods: {
                GetOrderSubtotals:(order_subtotal:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(order_subtotal);
                    if (isNaN(id)) {
                        if (order_subtotal['OrderID'] !== undefined) { where['OrderID'] = order_subtotal['OrderID']}
                        if (order_subtotal['Subtotal'] !== undefined) { where['Subtotal'] = order_subtotal['Subtotal']}
                    } else {
                        where['OrderID'] = id;
                    }
                    return OrderSubtotalsModel.find({where: where});
                }
            }
        });
    
    OrdersModel = <types.OrdersModel> SEQUELIZE.define<types.OrdersInstance, types.OrdersPojo>('Order', {
        'OrderID': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'CustomerID': {type: Sequelize.STRING},
        'EmployeeID': {type: Sequelize.INTEGER},
        'OrderDate': {type: Sequelize.DATE},
        'RequiredDate': {type: Sequelize.DATE},
        'ShippedDate': {type: Sequelize.DATE},
        'ShipVia': {type: Sequelize.INTEGER},
        'Freight': {type: Sequelize.DECIMAL, defaultValue: "0.0000"},
        'ShipName': {type: Sequelize.STRING},
        'ShipAddress': {type: Sequelize.STRING},
        'ShipCity': {type: Sequelize.STRING},
        'ShipRegion': {type: Sequelize.STRING},
        'ShipPostalCode': {type: Sequelize.STRING},
        'ShipCountry': {type: Sequelize.STRING}
        },
        {
            classMethods: {
                GetOrders:(order:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(order);
                    if (isNaN(id)) {
                        if (order['OrderID'] !== undefined) { where['OrderID'] = order['OrderID']}
                        if (order['CustomerID'] !== undefined) { where['CustomerID'] = order['CustomerID']}
                        if (order['EmployeeID'] !== undefined) { where['EmployeeID'] = order['EmployeeID']}
                        if (order['OrderDate'] !== undefined) { where['OrderDate'] = order['OrderDate']}
                        if (order['RequiredDate'] !== undefined) { where['RequiredDate'] = order['RequiredDate']}
                        if (order['ShippedDate'] !== undefined) { where['ShippedDate'] = order['ShippedDate']}
                        if (order['ShipVia'] !== undefined) { where['ShipVia'] = order['ShipVia']}
                        if (order['Freight'] !== undefined) { where['Freight'] = order['Freight']}
                        if (order['ShipName'] !== undefined) { where['ShipName'] = order['ShipName']}
                        if (order['ShipAddress'] !== undefined) { where['ShipAddress'] = order['ShipAddress']}
                        if (order['ShipCity'] !== undefined) { where['ShipCity'] = order['ShipCity']}
                        if (order['ShipRegion'] !== undefined) { where['ShipRegion'] = order['ShipRegion']}
                        if (order['ShipPostalCode'] !== undefined) { where['ShipPostalCode'] = order['ShipPostalCode']}
                        if (order['ShipCountry'] !== undefined) { where['ShipCountry'] = order['ShipCountry']}
                    } else {
                        where['OrderID'] = id;
                    }
                    return OrdersModel.find({where: where});
                }
            }
        });
    
    OrdersQryModel = <types.OrdersQryModel> SEQUELIZE.define<types.OrdersQryInstance, types.OrdersQryPojo>('Orders Qry', {
        'OrderID': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'CustomerID': {type: Sequelize.STRING},
        'EmployeeID': {type: Sequelize.INTEGER},
        'OrderDate': {type: Sequelize.DATE},
        'RequiredDate': {type: Sequelize.DATE},
        'ShippedDate': {type: Sequelize.DATE},
        'ShipVia': {type: Sequelize.INTEGER},
        'Freight': {type: Sequelize.DECIMAL, defaultValue: "0.0000"},
        'ShipName': {type: Sequelize.STRING},
        'ShipAddress': {type: Sequelize.STRING},
        'ShipCity': {type: Sequelize.STRING},
        'ShipRegion': {type: Sequelize.STRING},
        'ShipPostalCode': {type: Sequelize.STRING},
        'ShipCountry': {type: Sequelize.STRING},
        'CompanyName': {type: Sequelize.STRING, allowNull: false},
        'Address': {type: Sequelize.STRING},
        'City': {type: Sequelize.STRING},
        'Region': {type: Sequelize.STRING},
        'PostalCode': {type: Sequelize.STRING},
        'Country': {type: Sequelize.STRING}
        },
        {
            classMethods: {
                GetOrdersQry:(orders_qry:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(orders_qry);
                    if (isNaN(id)) {
                        if (orders_qry['OrderID'] !== undefined) { where['OrderID'] = orders_qry['OrderID']}
                        if (orders_qry['CustomerID'] !== undefined) { where['CustomerID'] = orders_qry['CustomerID']}
                        if (orders_qry['EmployeeID'] !== undefined) { where['EmployeeID'] = orders_qry['EmployeeID']}
                        if (orders_qry['OrderDate'] !== undefined) { where['OrderDate'] = orders_qry['OrderDate']}
                        if (orders_qry['RequiredDate'] !== undefined) { where['RequiredDate'] = orders_qry['RequiredDate']}
                        if (orders_qry['ShippedDate'] !== undefined) { where['ShippedDate'] = orders_qry['ShippedDate']}
                        if (orders_qry['ShipVia'] !== undefined) { where['ShipVia'] = orders_qry['ShipVia']}
                        if (orders_qry['Freight'] !== undefined) { where['Freight'] = orders_qry['Freight']}
                        if (orders_qry['ShipName'] !== undefined) { where['ShipName'] = orders_qry['ShipName']}
                        if (orders_qry['ShipAddress'] !== undefined) { where['ShipAddress'] = orders_qry['ShipAddress']}
                        if (orders_qry['ShipCity'] !== undefined) { where['ShipCity'] = orders_qry['ShipCity']}
                        if (orders_qry['ShipRegion'] !== undefined) { where['ShipRegion'] = orders_qry['ShipRegion']}
                        if (orders_qry['ShipPostalCode'] !== undefined) { where['ShipPostalCode'] = orders_qry['ShipPostalCode']}
                        if (orders_qry['ShipCountry'] !== undefined) { where['ShipCountry'] = orders_qry['ShipCountry']}
                        if (orders_qry['CompanyName'] !== undefined) { where['CompanyName'] = orders_qry['CompanyName']}
                        if (orders_qry['Address'] !== undefined) { where['Address'] = orders_qry['Address']}
                        if (orders_qry['City'] !== undefined) { where['City'] = orders_qry['City']}
                        if (orders_qry['Region'] !== undefined) { where['Region'] = orders_qry['Region']}
                        if (orders_qry['PostalCode'] !== undefined) { where['PostalCode'] = orders_qry['PostalCode']}
                        if (orders_qry['Country'] !== undefined) { where['Country'] = orders_qry['Country']}
                    } else {
                        where['OrderID'] = id;
                    }
                    return OrdersQryModel.find({where: where});
                }
            }
        });
    
    ProductSalesFor1997Model = <types.ProductSalesFor1997Model> SEQUELIZE.define<types.ProductSalesFor1997Instance, types.ProductSalesFor1997Pojo>('Product Sales for 1997', {
        'CategoryName': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'ProductName': {type: Sequelize.STRING, allowNull: false},
        'ProductSales': {type: Sequelize.DECIMAL}
        },
        {
            classMethods: {
                GetProductSalesFor1997:(product_sales_for_1997:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(product_sales_for_1997);
                    if (isNaN(id)) {
                        if (product_sales_for_1997['CategoryName'] !== undefined) { where['CategoryName'] = product_sales_for_1997['CategoryName']}
                        if (product_sales_for_1997['ProductName'] !== undefined) { where['ProductName'] = product_sales_for_1997['ProductName']}
                        if (product_sales_for_1997['ProductSales'] !== undefined) { where['ProductSales'] = product_sales_for_1997['ProductSales']}
                    } else {
                        where['!!cannotFindIdFieldOnProduct Sales for 1997!!'] = id;
                    }
                    return ProductSalesFor1997Model.find({where: where});
                }
            }
        });
    
    ProductsModel = <types.ProductsModel> SEQUELIZE.define<types.ProductsInstance, types.ProductsPojo>('Product', {
        'ProductID': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'ProductName': {type: Sequelize.STRING, allowNull: false},
        'SupplierID': {type: Sequelize.INTEGER},
        'CategoryID': {type: Sequelize.INTEGER},
        'QuantityPerUnit': {type: Sequelize.STRING},
        'UnitPrice': {type: Sequelize.DECIMAL, defaultValue: "0.0000"},
        'UnitsInStock': {type: Sequelize.INTEGER, defaultValue: "0"},
        'UnitsOnOrder': {type: Sequelize.INTEGER, defaultValue: "0"},
        'ReorderLevel': {type: Sequelize.INTEGER, defaultValue: "0"},
        'Discontinued': {type: Sequelize.BLOB, allowNull: false, defaultValue: "b'0'"}
        },
        {
            classMethods: {
                GetProducts:(product:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(product);
                    if (isNaN(id)) {
                        if (product['ProductID'] !== undefined) { where['ProductID'] = product['ProductID']}
                        if (product['ProductName'] !== undefined) { where['ProductName'] = product['ProductName']}
                        if (product['SupplierID'] !== undefined) { where['SupplierID'] = product['SupplierID']}
                        if (product['CategoryID'] !== undefined) { where['CategoryID'] = product['CategoryID']}
                        if (product['QuantityPerUnit'] !== undefined) { where['QuantityPerUnit'] = product['QuantityPerUnit']}
                        if (product['UnitPrice'] !== undefined) { where['UnitPrice'] = product['UnitPrice']}
                        if (product['UnitsInStock'] !== undefined) { where['UnitsInStock'] = product['UnitsInStock']}
                        if (product['UnitsOnOrder'] !== undefined) { where['UnitsOnOrder'] = product['UnitsOnOrder']}
                        if (product['ReorderLevel'] !== undefined) { where['ReorderLevel'] = product['ReorderLevel']}
                        if (product['Discontinued'] !== undefined) { where['Discontinued'] = product['Discontinued']}
                    } else {
                        where['ProductID'] = id;
                    }
                    return ProductsModel.find({where: where});
                }
            }
        });
    
    ProductsAboveAveragePriceModel = <types.ProductsAboveAveragePriceModel> SEQUELIZE.define<types.ProductsAboveAveragePriceInstance, types.ProductsAboveAveragePricePojo>('Products Above Average Price', {
        'ProductName': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'UnitPrice': {type: Sequelize.DECIMAL, defaultValue: "0.0000"}
        },
        {
            classMethods: {
                GetProductsAboveAveragePrice:(products_above_average_price:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(products_above_average_price);
                    if (isNaN(id)) {
                        if (products_above_average_price['ProductName'] !== undefined) { where['ProductName'] = products_above_average_price['ProductName']}
                        if (products_above_average_price['UnitPrice'] !== undefined) { where['UnitPrice'] = products_above_average_price['UnitPrice']}
                    } else {
                        where['!!cannotFindIdFieldOnProducts Above Average Price!!'] = id;
                    }
                    return ProductsAboveAveragePriceModel.find({where: where});
                }
            }
        });
    
    ProductsByCategoryModel = <types.ProductsByCategoryModel> SEQUELIZE.define<types.ProductsByCategoryInstance, types.ProductsByCategoryPojo>('Products by Category', {
        'CategoryName': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'ProductName': {type: Sequelize.STRING, allowNull: false},
        'QuantityPerUnit': {type: Sequelize.STRING},
        'UnitsInStock': {type: Sequelize.INTEGER, defaultValue: "0"},
        'Discontinued': {type: Sequelize.BLOB, allowNull: false, defaultValue: "b'0'"}
        },
        {
            classMethods: {
                GetProductsByCategory:(products_by_category:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(products_by_category);
                    if (isNaN(id)) {
                        if (products_by_category['CategoryName'] !== undefined) { where['CategoryName'] = products_by_category['CategoryName']}
                        if (products_by_category['ProductName'] !== undefined) { where['ProductName'] = products_by_category['ProductName']}
                        if (products_by_category['QuantityPerUnit'] !== undefined) { where['QuantityPerUnit'] = products_by_category['QuantityPerUnit']}
                        if (products_by_category['UnitsInStock'] !== undefined) { where['UnitsInStock'] = products_by_category['UnitsInStock']}
                        if (products_by_category['Discontinued'] !== undefined) { where['Discontinued'] = products_by_category['Discontinued']}
                    } else {
                        where['!!cannotFindIdFieldOnProducts by Category!!'] = id;
                    }
                    return ProductsByCategoryModel.find({where: where});
                }
            }
        });
    
    QuarterlyOrdersModel = <types.QuarterlyOrdersModel> SEQUELIZE.define<types.QuarterlyOrdersInstance, types.QuarterlyOrdersPojo>('Quarterly Order', {
        'CustomerID': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'CompanyName': {type: Sequelize.STRING, allowNull: false},
        'City': {type: Sequelize.STRING},
        'Country': {type: Sequelize.STRING}
        },
        {
            classMethods: {
                GetQuarterlyOrders:(quarterly_order:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(quarterly_order);
                    if (isNaN(id)) {
                        if (quarterly_order['CustomerID'] !== undefined) { where['CustomerID'] = quarterly_order['CustomerID']}
                        if (quarterly_order['CompanyName'] !== undefined) { where['CompanyName'] = quarterly_order['CompanyName']}
                        if (quarterly_order['City'] !== undefined) { where['City'] = quarterly_order['City']}
                        if (quarterly_order['Country'] !== undefined) { where['Country'] = quarterly_order['Country']}
                    } else {
                        where['CustomerID'] = id;
                    }
                    return QuarterlyOrdersModel.find({where: where});
                }
            }
        });
    
    RegionModel = <types.RegionModel> SEQUELIZE.define<types.RegionInstance, types.RegionPojo>('Region', {
        'RegionID': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'RegionDescription': {type: Sequelize.STRING, allowNull: false}
        },
        {
            classMethods: {
                GetRegion:(region:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(region);
                    if (isNaN(id)) {
                        if (region['RegionID'] !== undefined) { where['RegionID'] = region['RegionID']}
                        if (region['RegionDescription'] !== undefined) { where['RegionDescription'] = region['RegionDescription']}
                    } else {
                        where['RegionID'] = id;
                    }
                    return RegionModel.find({where: where});
                }
            }
        });
    
    SalesByCategoryModel = <types.SalesByCategoryModel> SEQUELIZE.define<types.SalesByCategoryInstance, types.SalesByCategoryPojo>('Sales by Category', {
        'CategoryID': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'CategoryName': {type: Sequelize.STRING, allowNull: false},
        'ProductName': {type: Sequelize.STRING, allowNull: false},
        'ProductSales': {type: Sequelize.DECIMAL}
        },
        {
            classMethods: {
                GetSalesByCategory:(sales_by_category:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(sales_by_category);
                    if (isNaN(id)) {
                        if (sales_by_category['CategoryID'] !== undefined) { where['CategoryID'] = sales_by_category['CategoryID']}
                        if (sales_by_category['CategoryName'] !== undefined) { where['CategoryName'] = sales_by_category['CategoryName']}
                        if (sales_by_category['ProductName'] !== undefined) { where['ProductName'] = sales_by_category['ProductName']}
                        if (sales_by_category['ProductSales'] !== undefined) { where['ProductSales'] = sales_by_category['ProductSales']}
                    } else {
                        where['CategoryID'] = id;
                    }
                    return SalesByCategoryModel.find({where: where});
                }
            }
        });
    
    SalesTotalsByAmountModel = <types.SalesTotalsByAmountModel> SEQUELIZE.define<types.SalesTotalsByAmountInstance, types.SalesTotalsByAmountPojo>('Sales Totals by Amount', {
        'SaleAmount': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'OrderID': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'CompanyName': {type: Sequelize.STRING, allowNull: false},
        'ShippedDate': {type: Sequelize.DATE}
        },
        {
            classMethods: {
                GetSalesTotalsByAmount:(sales_totals_by_amount:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(sales_totals_by_amount);
                    if (isNaN(id)) {
                        if (sales_totals_by_amount['SaleAmount'] !== undefined) { where['SaleAmount'] = sales_totals_by_amount['SaleAmount']}
                        if (sales_totals_by_amount['OrderID'] !== undefined) { where['OrderID'] = sales_totals_by_amount['OrderID']}
                        if (sales_totals_by_amount['CompanyName'] !== undefined) { where['CompanyName'] = sales_totals_by_amount['CompanyName']}
                        if (sales_totals_by_amount['ShippedDate'] !== undefined) { where['ShippedDate'] = sales_totals_by_amount['ShippedDate']}
                    } else {
                        where['OrderID'] = id;
                    }
                    return SalesTotalsByAmountModel.find({where: where});
                }
            }
        });
    
    ShippersModel = <types.ShippersModel> SEQUELIZE.define<types.ShippersInstance, types.ShippersPojo>('Shipper', {
        'ShipperID': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'CompanyName': {type: Sequelize.STRING, allowNull: false},
        'Phone': {type: Sequelize.STRING}
        },
        {
            classMethods: {
                GetShippers:(shipper:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(shipper);
                    if (isNaN(id)) {
                        if (shipper['ShipperID'] !== undefined) { where['ShipperID'] = shipper['ShipperID']}
                        if (shipper['CompanyName'] !== undefined) { where['CompanyName'] = shipper['CompanyName']}
                        if (shipper['Phone'] !== undefined) { where['Phone'] = shipper['Phone']}
                    } else {
                        where['ShipperID'] = id;
                    }
                    return ShippersModel.find({where: where});
                }
            }
        });
    
    SummaryOfSalesByQuarterModel = <types.SummaryOfSalesByQuarterModel> SEQUELIZE.define<types.SummaryOfSalesByQuarterInstance, types.SummaryOfSalesByQuarterPojo>('Summary of Sales by Quarter', {
        'ShippedDate': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'OrderID': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'Subtotal': {type: Sequelize.DECIMAL}
        },
        {
            classMethods: {
                GetSummaryOfSalesByQuarter:(summary_of_sales_by_quarter:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(summary_of_sales_by_quarter);
                    if (isNaN(id)) {
                        if (summary_of_sales_by_quarter['ShippedDate'] !== undefined) { where['ShippedDate'] = summary_of_sales_by_quarter['ShippedDate']}
                        if (summary_of_sales_by_quarter['OrderID'] !== undefined) { where['OrderID'] = summary_of_sales_by_quarter['OrderID']}
                        if (summary_of_sales_by_quarter['Subtotal'] !== undefined) { where['Subtotal'] = summary_of_sales_by_quarter['Subtotal']}
                    } else {
                        where['OrderID'] = id;
                    }
                    return SummaryOfSalesByQuarterModel.find({where: where});
                }
            }
        });
    
    SummaryOfSalesByYearModel = <types.SummaryOfSalesByYearModel> SEQUELIZE.define<types.SummaryOfSalesByYearInstance, types.SummaryOfSalesByYearPojo>('Summary of Sales by Year', {
        'ShippedDate': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'OrderID': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'Subtotal': {type: Sequelize.DECIMAL}
        },
        {
            classMethods: {
                GetSummaryOfSalesByYear:(summary_of_sales_by_year:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(summary_of_sales_by_year);
                    if (isNaN(id)) {
                        if (summary_of_sales_by_year['ShippedDate'] !== undefined) { where['ShippedDate'] = summary_of_sales_by_year['ShippedDate']}
                        if (summary_of_sales_by_year['OrderID'] !== undefined) { where['OrderID'] = summary_of_sales_by_year['OrderID']}
                        if (summary_of_sales_by_year['Subtotal'] !== undefined) { where['Subtotal'] = summary_of_sales_by_year['Subtotal']}
                    } else {
                        where['OrderID'] = id;
                    }
                    return SummaryOfSalesByYearModel.find({where: where});
                }
            }
        });
    
    SuppliersModel = <types.SuppliersModel> SEQUELIZE.define<types.SuppliersInstance, types.SuppliersPojo>('Supplier', {
        'SupplierID': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'CompanyName': {type: Sequelize.STRING, allowNull: false},
        'ContactName': {type: Sequelize.STRING},
        'ContactTitle': {type: Sequelize.STRING},
        'Address': {type: Sequelize.STRING},
        'City': {type: Sequelize.STRING},
        'Region': {type: Sequelize.STRING},
        'PostalCode': {type: Sequelize.STRING},
        'Country': {type: Sequelize.STRING},
        'Phone': {type: Sequelize.STRING},
        'Fax': {type: Sequelize.STRING},
        'HomePage': {type: Sequelize.STRING}
        },
        {
            classMethods: {
                GetSuppliers:(supplier:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(supplier);
                    if (isNaN(id)) {
                        if (supplier['SupplierID'] !== undefined) { where['SupplierID'] = supplier['SupplierID']}
                        if (supplier['CompanyName'] !== undefined) { where['CompanyName'] = supplier['CompanyName']}
                        if (supplier['ContactName'] !== undefined) { where['ContactName'] = supplier['ContactName']}
                        if (supplier['ContactTitle'] !== undefined) { where['ContactTitle'] = supplier['ContactTitle']}
                        if (supplier['Address'] !== undefined) { where['Address'] = supplier['Address']}
                        if (supplier['City'] !== undefined) { where['City'] = supplier['City']}
                        if (supplier['Region'] !== undefined) { where['Region'] = supplier['Region']}
                        if (supplier['PostalCode'] !== undefined) { where['PostalCode'] = supplier['PostalCode']}
                        if (supplier['Country'] !== undefined) { where['Country'] = supplier['Country']}
                        if (supplier['Phone'] !== undefined) { where['Phone'] = supplier['Phone']}
                        if (supplier['Fax'] !== undefined) { where['Fax'] = supplier['Fax']}
                        if (supplier['HomePage'] !== undefined) { where['HomePage'] = supplier['HomePage']}
                    } else {
                        where['SupplierID'] = id;
                    }
                    return SuppliersModel.find({where: where});
                }
            }
        });
    
    TerritoriesModel = <types.TerritoriesModel> SEQUELIZE.define<types.TerritoriesInstance, types.TerritoriesPojo>('Territory', {
        'TerritoryID': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'TerritoryDescription': {type: Sequelize.STRING, allowNull: false},
        'RegionID': {type: Sequelize.INTEGER, allowNull: false}
        },
        {
            classMethods: {
                GetTerritories:(territory:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(territory);
                    if (isNaN(id)) {
                        if (territory['TerritoryID'] !== undefined) { where['TerritoryID'] = territory['TerritoryID']}
                        if (territory['TerritoryDescription'] !== undefined) { where['TerritoryDescription'] = territory['TerritoryDescription']}
                        if (territory['RegionID'] !== undefined) { where['RegionID'] = territory['RegionID']}
                    } else {
                        where['TerritoryID'] = id;
                    }
                    return TerritoriesModel.find({where: where});
                }
            }
        });
    
    CustomerDemographicsModel.hasMany(CustomerCustomerDemoModel, {foreignKey: 'CustomerTypeID' });
    CustomerCustomerDemoModel.belongsTo(CustomerDemographicsModel, {as: undefined, foreignKey: 'CustomerTypeID' });

    
    CustomersModel.hasMany(CustomerCustomerDemoModel, {foreignKey: 'CustomerID' });
    CustomerCustomerDemoModel.belongsTo(CustomersModel, {as: undefined, foreignKey: 'CustomerID' });

    
    EmployeesModel.hasMany(EmployeeTerritoriesModel, {foreignKey: 'EmployeeID' });
    EmployeeTerritoriesModel.belongsTo(EmployeesModel, {as: undefined, foreignKey: 'EmployeeID' });

    
    TerritoriesModel.hasMany(EmployeeTerritoriesModel, {foreignKey: 'TerritoryID' });
    EmployeeTerritoriesModel.belongsTo(TerritoriesModel, {as: undefined, foreignKey: 'TerritoryID' });

    
    EmployeesModel.hasMany(EmployeesModel, {foreignKey: 'ReportsTo' });
    EmployeesModel.belongsTo(EmployeesModel, {as: undefined, foreignKey: 'ReportsTo' });

    
    OrdersModel.hasMany(OrderDetailsModel, {foreignKey: 'OrderID' });
    OrderDetailsModel.belongsTo(OrdersModel, {as: undefined, foreignKey: 'OrderID' });

    
    ProductsModel.hasMany(OrderDetailsModel, {foreignKey: 'ProductID' });
    OrderDetailsModel.belongsTo(ProductsModel, {as: undefined, foreignKey: 'ProductID' });

    
    CustomersModel.hasMany(OrdersModel, {foreignKey: 'CustomerID' });
    OrdersModel.belongsTo(CustomersModel, {as: undefined, foreignKey: 'CustomerID' });

    
    EmployeesModel.hasMany(OrdersModel, {foreignKey: 'EmployeeID' });
    OrdersModel.belongsTo(EmployeesModel, {as: undefined, foreignKey: 'EmployeeID' });

    
    ShippersModel.hasMany(OrdersModel, {foreignKey: 'ShipVia' });
    OrdersModel.belongsTo(ShippersModel, {as: undefined, foreignKey: 'ShipVia' });

    
    CategoriesModel.hasMany(ProductsModel, {foreignKey: 'CategoryID' });
    ProductsModel.belongsTo(CategoriesModel, {as: undefined, foreignKey: 'CategoryID' });

    
    SuppliersModel.hasMany(ProductsModel, {foreignKey: 'SupplierID' });
    ProductsModel.belongsTo(SuppliersModel, {as: undefined, foreignKey: 'SupplierID' });

    
    RegionModel.hasMany(TerritoriesModel, {foreignKey: 'RegionID' });
    TerritoriesModel.belongsTo(RegionModel, {as: undefined, foreignKey: 'RegionID' });

    
    return exports;
}
