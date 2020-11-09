<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Supplement extends Model
{
    //
    protected $table = 'tblSupplements';
    protected $primaryKey = 'Supplement_id';
    public $incrementing = true;
    public $timestamps = false;
    protected $keyType = 'string';
    protected $fillable = [

        'Supplement_Description',
        'Cost_excl',
        'Min_levels',
        'Current_stock_levels',
        'Nappi_code',
        'Supplier_ID',

    ];
}
