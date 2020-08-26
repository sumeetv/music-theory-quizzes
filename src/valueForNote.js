const NOTES = [
    'A',
    'Bb',
    'B',
    'C',
    'Db',
    'D',
    'Eb',
    'E',
    'F',
    'Gb',
    'G',
    'Ab',
];

export function valueForNote(note_name) {
    return NOTES.indexOf(note_name);
}

export function noteForValue(value) {
    value = value % NOTES.length;
    return NOTES[value];
}
