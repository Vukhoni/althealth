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




            'Telephone' => 'size:18|regex:/^\(\d{3}\)\-\(\d{3}\)\-\(\d{4}\)$/',
            'Workphone' => 'size:18|regex:/^\(\d{3}\)\-\(\d{3}\)\-\(\d{4}\)$/',
            'Cellphone' => 'size:18|regex:/^\(\d{3}\)\-\(\d{3}\)\-\(\d{4}\)$/',


        ]);
    }
}
