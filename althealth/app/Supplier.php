<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    //
    protected $table = 'tblSupplier_Info';
    protected $primaryKey = 'Supplier_ID';
    public $incrementing = false;
    public $timestamps = false;
    protected $keyType = 'string';
    protected $fillable = [
        'Supplier_ID',
        'Contact_Person',
        'Supplier_Tel',
        'Supplier_Email',
        'Bank',
        'Bank_code',
        'Supplier_BankNum',
        'Supplier_Type_Bank_Account',
    ];
}
