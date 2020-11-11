const ClientID = 'ClientID';
const Name = 'Name';
const Surname = 'Surname';
const Workphone = 'Workphone';
const Code = 'Code';
const Address = 'Address';
const Telephone = 'Telephone';
const Cellphone = 'Cellphone';
const Email = 'Email';
const ReferenceID = 'ReferenceID';
const SAIDLength = 13;
const Description = 'Description';
const Cost = 'Cost';
const MinLevel = 'MinLevel';
const CurrentLevel = 'CurrentLevel';
const NappiCode = 'NappiCode';
const VAT = 15;
const SupplierID = 'SupplierID';
const Contact = 'Contact';
const Bank = 'Bank';
const BankCode = 'BankCode';
const BankNumber = 'BankNumber';
const AccountType = 'AccountType';
const Password = 'Password';
const SATelLength = 10;
export default {
	fields: {
		Email,
		Password,		
		ClientID,
		Name,
		Surname,
		Workphone,
		Code,
		Address,
		Telephone,
		Cellphone,
		ReferenceID,
		Cost,
		Description,
		MinLevel,
		CurrentLevel,
		NappiCode,
		VAT,
		SupplierID,
		Contact,
		Bank,
		BankCode,
		BankNumber,
		AccountType,
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
		NameLength: 30,
		SurnameLength: 50,
		AddressLength: 200,
		CodeLength: 4,
		EmailLength: 200,
		ReferenceIDLength: 20,
		PasswordLength: 15,
		PasswordMinLength: 8,
	},
	errorMessages: {
		ClientIDLuhnFailureMsg: `${ClientID} is invalid SA Identity Number`,
		SAIDLengthErrorMsg: `South African ID Length is ${SAIDLength} characters`,
		SATelLengthErrorMsg: `South African ${Telephone} length is ${SATelLength} characters`,
		SATelRegexErrorMsg: `Please fill in field in (0000)-(000)-(000) format`,
	},
};
