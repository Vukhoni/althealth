<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class IncompleteClient extends JsonResource
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
            'ID' => $this->CLIENT,
            'Telephone' => $this->HOME,
            'Workphone' => $this->WORK,
            'Cellphone'=>$this->CELL,
            'Email' => $this->E_MAIL,
        ];
    }
}
