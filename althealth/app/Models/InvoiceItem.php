<?php

namespace App\Models;

use App\Supplement;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InvoiceItem extends Model
{
    use HasFactory;
    protected $table = 'tblInv_Items';
    protected $fillable = [
        'Inv_Num',
        'Supplement_id',
        'Item_price',
        'Item_Quantity',
    ];

    public $timestamps = false;
    public function supplement()
    {
        return  $this->hasOne(Supplement::class, 'Supplement_id', 'Supplement_id');
    }
}
