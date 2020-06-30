<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LowStock extends JsonResource
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
            'Supplement' => $this->SUPPLEMENT,
            'SupplierInformation' => $this->SUPPLIER_INFORMATION,
            'MinLevel'=> $this->MIN_LEVELS,
            'CurrentLevel' =>$this->CURRENT_STOCK
        ];
    }
}
