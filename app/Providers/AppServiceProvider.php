<?php

namespace Raffles\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        /**
         * Translate verbs to spanish.
         */
        Route::resourceVerbs(
            [
            'index' => 'listar',
            'create' => 'crear',
            'store' => 'guardar',
            'show' => 'mostrar',
            'edit' => 'editar',
            'update' => 'actualizar',
            'destroy' => 'eliminar',
            ]
        );

        /**
         * Set default database string length.
         */
        Schema::defaultStringLength(191);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
