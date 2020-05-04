import { questions } from './questions';

describe("The questions reducer", () => {
    it('should work', () => {
        console.log("Testing questions");
        const state = ["foo", "bar"];
        const stateClone = ["foo", "bar"];
        const newState = questions(state, { type: 'UNRECOGNIZED_ACTION' });

        expect(newState).toEqual(stateClone);
        expect(newState).toBe(state);
    });

    it("should add new questions", () => {
        const state = [{ question_id: 'foo' }, { question_id: 'bar' }];
        const newQuestion = { questionn_id: 'java' };
        const newQuestionClone = { questionn_id: 'baz' };
        const newState = questions(state, { type: 'FETCHED_QUESTION', question: newQuestion });

        expect(newState).toContain(newQuestion);
        expect(state).not.toContain(newQuestion);
        console.log(newState);
        expect(newState).toHaveLength(3);
    })
})