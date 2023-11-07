<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Writer;

class WriterController extends Controller
{
    public function index()
    {   
        $writers = Writer::all();
        return response()->json($writers);
    }

    public function show($id)
    {
        $writer = Writer::find($id);

        if (!$writer) {
            return response()->json(['message' => 'A szerző nem található.'], 404);
        }

        return response()->json($writer);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nev' => 'required|string',
            'szul' => 'required|integer',
        ]);

        $writer = Writer::create([
            'nev' => $validatedData['nev'],
            'szul' => $validatedData['szul'],
        ]);

        return response()->json($writer, 201);
    }

    public function update(Request $request, $id)
    {
        $writer = Writer::find($id);

        if (!$writer) {
            return response()->json(['message' => 'A szerző nem található.'], 404);
        }

        $validatedData = $request->validate([
            'nev' => 'string',
            'szul' => 'integer',
        ]);

        $writer->update($validatedData);

        return response()->json($writer);
    }

    public function destroy($id)
    {
        $writer = Writer::find($id);

        if (!$writer) {
            return response()->json(['message' => 'A szerző nem található.'], 404);
        }

        $writer->delete();

        return response()->json(['message' => 'A szerző sikeresen törölve.']);
    }
}
