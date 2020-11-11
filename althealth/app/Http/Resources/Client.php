<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Client extends JsonResource
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
            'ID' => $this->Client_id,
            'Name' => $this->C_name,
            'Surname' => $this->C_surname,
            'Address' => $this->Address,
            'Code' => $this->Code,
            'Cellphone' => $this->C_Tel_Cell,
            'Telephone' => $this->C_Tel_H,
            'Workphone' => $this->C_Tel_W,
            'Email' => $this->C_Email,
            'ReferenceID' => $this->Reference_ID,
        ];
    }
}
