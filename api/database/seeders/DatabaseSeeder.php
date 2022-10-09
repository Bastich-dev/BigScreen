<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Database\Seeders\CurrencySeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {


        DB::table('users')->insert([
            'name' => "John Doe",
            'email' => "johndoe@example.org",
            'password' => Hash::make('password123')
        ]);

        $this->call([
            CurrencySeeder::class,
        ]);
    }
}
