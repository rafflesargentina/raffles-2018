<?php

namespace Raffles\Providers\Raffles\Listeners;

use Raffles\Providers\Laravel\Passport\Events\AccessTokenCreated;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class RevokeOldTokens
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  AccessTokenCreated  $event
     * @return void
     */
    public function handle(AccessTokenCreated $event)
    {
        //
    }
}
