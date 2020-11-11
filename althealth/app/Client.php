<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    //
    protected $table = 'tblClientInfo';
    protected $primaryKey = 'Client_id';
    public $incrementing = false;
    public $timestamps = false;
    protected $keyType = 'string';
    protected $fillable = [
        'Client_id',
        'C_name',
        'C_surname',
        'Address',
        'Code',
        'C_Tel_Cell',
        'C_Tel_H',
        'C_Tel_W',
        'C_Email',
        'Reference_ID',
    ];
}
