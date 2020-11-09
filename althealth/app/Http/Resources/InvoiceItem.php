<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class InvoiceItem extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'InvoiceNumber' => $this->Inv_Num,
            'SupplementID' => $this->Supplement_id,
            'Price' => $this->Item_price,
            'Quantity' => $this->Item_Quantity,
            'Supplement' => new Supplement($this->supplement)
        ];
    }
}
