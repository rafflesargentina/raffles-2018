<?php

namespace Raffles\Models\Traits;

trait UserTrait
{
    /**
     * Get the user's name.
     *
     * @return string
     */
    public function getNameAttribute()
    {
        return $this->attributes['name'] = trim($this->first_name.' '.$this->last_name);
    }

    /**
     * Get the user's avatar url.
     *
     * @return string
      */
    public function getAvatarUrlAttribute()
    {
        return $this->attributes['avatar_url'] = \Storage::url($this->avatar);
    }
}
