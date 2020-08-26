import React from 'react';

import { getValueForNote, getNoteForValue } from './NotesHelpers.js';

const MAX_FRET = 12;

class NotesQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answerHidden: true,
            currentString: this.getRandomString(),
            currentFret: this.getRandomFret(),
        };
    }

    // Pick a random string from EADGBE (standard tuning)
    getRandomString = () => {
        const strings = ["E", "A", "D", "G", "B"];
        let idx = Math.floor(Math.random() * strings.length);
        return strings[idx];
    }

    getRandomFret = () => {
        // The range is from 1 to MAX_FRET, so we need to subtract one
        // when getting the random value and then increase it afterwards
        return Math.floor(Math.random() * (MAX_FRET - 1)) + 1;
    }

    getCurrentAnswer = () => {
        let current_value =
            getValueForNote(this.state.currentString) + this.state.currentFret;
        return getNoteForValue(current_value);
    }

    displayAnswer = () => {
        this.setState(state => ({
            answerHidden: false,
        }));
    }

    refreshQuestion = () => {
        this.setState(state => ({
            answerHidden: true,
            currentString: this.getRandomString(),
            currentFret: this.getRandomFret(),
        }));
    }

    render = () => {
        return (
            <div>
                <p>
                    {"What note is on fret " + this.state.currentFret + " "}
                    {"of the " + this.state.currentString + " string?"}
                </p>
                <p hidden={this.state.answerHidden}>
                    {"The answer is " + this.getCurrentAnswer()}
                </p>
                <button onClick={this.displayAnswer}>
                    Display Answer
                </button>
                <button onClick={this.refreshQuestion}>
                    Refresh Question
                </button>
            </div>
        );
    }
}

export default NotesQuiz;
