<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CompanyResource extends JsonResource
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
            'id' => $this->id,
            'uuid' => $this->uuid,
            'name' => $this->name,
            'cnpj' => $this->cnpj,
            'logo' => $this->logo,
            'active' => $this->active,
            'subscription' => $this->subscription,
            'expires_at' => $this->expires_at,
            'subscription_id' => $this->subscription_id,
            'subscription_active' => $this->subscription_active,
            'subscription_suspended' => $this->subscription_suspended,
            'updated_at' => $this->updated_at
        ];
    }
}
