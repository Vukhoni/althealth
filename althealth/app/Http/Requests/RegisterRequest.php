<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    private function luhn($number)
    {
        $sumTable = array(
            array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9),
            array(0, 2, 4, 6, 8, 1, 3, 5, 7, 9)
        );
        $sum = 0;
        $flip = 0;
        for ($i = strlen($number) - 1; $i >= 0; $i--) {
            $sum += $sumTable[$flip++ & 0x1][$number[$i]];
        }
        return $sum % 10 === 0;
    }
    public function authorize()
    {

        return true;
    }

    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            $id = $this->post('ID');
            if ($this->luhn($id)) {
                return;
            } else {
                $validator->errors()->add('ID', 'Invalid SA ID');
            }
        });
    }
    protected $rules = [
        'ID' => 'required|string|min:13|max:13',
        'Name' => 'required|max:30',
        'Surname' => 'required|max:30',
        'Email' => 'required|email|max:200',
        'ReferenceID' => 'required',
        'Address' => 'required|max:200',
        'Code' => 'required|size:4',
    ];
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return array_merge($this->rules, ['Password' => 'required|string|min:8|max:200']);
    }
}
