<?php

namespace App\Http\Requests;


use App\Http\Requests\RegisterRequest;

class ClientRequest extends RegisterRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return array_merge($this->rules, [




            'Telephone' => 'size:12|regex:^(\\d{4})-(\\d{3})-(\\d{3})',
            'Workphone' => 'size:12|regex:^(\\d{4})-(\\d{3})-(\\d{3})',
            'Cellphone' => 'size:12|regex:^(\\d{4})-(\\d{3})-(\\d{3})'


        ]);
    }
}
