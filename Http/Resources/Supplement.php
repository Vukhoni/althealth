<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Supplement extends JsonResource
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
            'ID' => $this->Supplement_id,
            'Description' => $this->Supplement_Description,
            'Cost'=> $this->Cost_excl,
            'Price' =>$this->Cost_incl,
            'MinLevel' => $this->Min_levels,
            'CurrentLevel'=>$this->Current_stock_levels,
            'NappiCode' => $this->Nappi_code,
            'SupplierID' => $this->Supplier_ID,
        ];
    }
}
