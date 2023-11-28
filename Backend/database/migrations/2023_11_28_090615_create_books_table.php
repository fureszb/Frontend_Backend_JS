<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
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
            $table->foreign('writer_id')->references('id')->on('writers');
            $table->timestamps();


          
        
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
