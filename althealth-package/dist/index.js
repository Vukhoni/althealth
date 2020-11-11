"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var ClientID = 'ClientID';
var Name = 'Name';
var Surname = 'Surname';
var Workphone = 'Workphone';
var Code = 'Code';
var Address = 'Address';
var Telephone = 'Telephone';
var Cellphone = 'Cellphone';
var Email = 'Email';
var ReferenceID = 'ReferenceID';
var SAIDLength = 13;
var Description = 'Description';
var Cost = 'Cost';
var MinLevel = 'MinLevel';
var CurrentLevel = 'CurrentLevel';
var NappiCode = 'NappiCode';
var VAT = 15;
var SupplierID = 'SupplierID';
var Contact = 'Contact';
var Bank = 'Bank';
var BankCode = 'BankCode';
var BankNumber = 'BankNumber';
var AccountType = 'AccountType';
var Password = 'Password';
var SATelLength = 10;
var _default = {
  fields: {
    Email: Email,
    Password: Password,
    ClientID: ClientID,
    Name: Name,
    Surname: Surname,
    Workphone: Workphone,
    Code: Code,
    Address: Address,
    Telephone: Telephone,
    Cellphone: Cellphone,
    ReferenceID: ReferenceID,
    Cost: Cost,
    Description: Description,
    MinLevel: MinLevel,
    CurrentLevel: CurrentLevel,
    NappiCode: NappiCode,
    VAT: VAT,
    SupplierID: SupplierID,
    Contact: Contact,
    Bank: Bank,
    BankCode: BankCode,
    BankNumber: BankNumber,
    AccountType: AccountType
  },
  validations: {
    SATelLength: SATelLength,
    SAIDLength: SAIDLength,
    SAIDRegex: '^\\d',
    SATelRegex: '^(\\d{4})-(\\d{3})-(\\d{3})',
    SupplementIDLength: 20,
    SupplierIDLength: 15,
    DescriptionLength: 30,
    NappiCodeLength: 20,
    FirstNameLength: 30,
    LastNameLength: 50,
    AddressLength: 200,
    CodeLength: 4,
    EmailLength: 200,
    ReferenceIDLength: 20,
    PasswordLength: 15,
    PasswordMinLength: 8
  },
  errorMessages: {
    ClientIDLuhnFailureMsg: "".concat(ClientID, " is invalid SA Identity Number"),
    SAIDLengthErrorMsg: "South African ID Length is ".concat(SAIDLength, " characters"),
    SATelLengthErrorMsg: "South African ".concat(Telephone, " length is ").concat(SATelLength, " characters"),
    SATelRegexErrorMsg: "Please fill in field in (0000)-(000)-(000) format"
  }
};
exports["default"] = _default;