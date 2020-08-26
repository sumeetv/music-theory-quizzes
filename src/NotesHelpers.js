const Notes = [
    "A",
    "Bb",
    "B",
    "C",
    "Db",
    "D",
    "Eb",
    "E",
    "F",
    "Gb",
    "G",
    "Ab",
];

export function getValueForNote(note_name) {
    return Notes.indexOf(note_name);
};

export function getNoteForValue(value) {
    let bounded_value = value % Notes.length;
    return Notes[bounded_value];
};
