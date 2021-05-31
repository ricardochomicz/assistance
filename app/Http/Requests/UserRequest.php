<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'name' => ['required', 'string', 'min:3', 'max:255'],
            'email' => ['required', 'string', 'email', 'min:3', 'max:255'],
            'password' => ['required', 'string', 'min:6', 'max:16'],

        ];

        if ($this->method() == 'PUT') {
            $rules['password'] = ['nullable', 'string', 'min:6', 'max:16'];
        }
        return $rules;
    }

    public function messages()
    {
        return [
            'user.name.required' => 'Your first name is required',
            'user.name.min' => 'Your first name must be at least 2 characters',
            'user.name.max' => 'Your first name cannot be more than 255 characters',
            'user.name.string' => 'Your first name must be letters only',
        ];
    }
}
