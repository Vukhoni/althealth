<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BirthDay extends JsonResource
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
            'ID' => $this->Client_ID,
            'Name' => $this->Client_Name,
            'Age'=> $this->Age,
        ];
    }
}
