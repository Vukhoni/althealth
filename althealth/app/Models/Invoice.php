<?php

namespace App\Models;

use App\Client;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;
    protected $table = 'tblInv_Info';
    protected $primaryKey = 'Inv_Num';
    public $incrementing = true;
    protected $keyType = 'string';

    protected $fillable = [
        'Inv_Date',
        'Comment',
        'Inv_Date',
        'Inv_Paid',
        'Inv_Paid_date',
        'Client_id',
    ];

    public $timestamps = false;

    // public function getRouteKeyName()
    // {
    //     return 'Inv_Num';
    // }
   

    public function client()
    {
        return $this->hasOne(Client::class, 'Client_id', 'Client_id');
    }
}
