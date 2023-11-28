<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('nev');
            $table->integer('datum');
            $table->unsignedBigInteger('writer_id');
            $table->timestamps();
            $table->foreign('writer_id')->references('id')->on('writers');
     
          
        
        });
        DB::table('books')->insert([
            [
                'nev' => 'A kis herceg',
                'datum' => 1943,
                'writer_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nev' => 'A kívülálló',
                'datum' => 2000,
                'writer_id' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nev' => 'Varázsló és üveg',
                'datum' => 2002,
                'writer_id' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nev' => 'A beteg',
                'datum' => 2023,
                'writer_id' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nev' => 'Az ember földje',
                'datum' => 2009,
                'writer_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }

    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
