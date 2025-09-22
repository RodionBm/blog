"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function SkillJournal() {
  const [entry, setEntry] = useState("");
  const [tag, setTag] = useState("");
  const [entries, setEntries] = useState([]);

  const handleSave = () => {
    if (entry.trim() !== "") {
      setEntries([
        { text: entry, tag: tag.trim(), date: new Date().toLocaleDateString() },
        ...entries,
      ]);
      setEntry("");
      setTag("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center">🧠 SkillJournal</h1>
      <Card>
        <CardContent className="p-4 space-y-4">
          <Textarea
            placeholder="What did you learn today?"
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
          />
          <Input
            placeholder="#tag (e.g. #JavaScript)"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
          <Button onClick={handleSave}>Save Entry</Button>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {entries.length === 0 ? (
          <p className="text-muted-foreground text-center">No entries yet.</p>
        ) : (
          entries.map((e, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <p className="mb-2 text-sm text-muted-foreground">{e.date}</p>
                <p className="whitespace-pre-wrap">{e.text}</p>
                {e.tag && <Badge className="mt-2">{e.tag}</Badge>}
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
