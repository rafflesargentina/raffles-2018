<?php

use Caffeinated\Shinobi\Models\Role;

use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            [
                'description' => 'Rol Administrador', 'name' => 'admin', 'slug' => 'admin', 'special' => '1'
            ]
        ];

        foreach ($roles as $role) {
            Role::create($role);
        }
    }
}
