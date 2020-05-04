import { mapStateToProps, QuestionDetailDisplay } from './QuestionDetail';
import renderer from 'react-test-renderer';
import React from 'react';

// describe('should run the test', () => {

//     // beforeEach(() => {
//     //     console.log('beforeEach')
//     // })

//     beforeAll(() => {
//         console.log('beforeAll')
//     })

//     it('should display a question detail', () => {
//         console.log('should display a question detail');
//     });

//     it.only('should display a question detail 2', () => {
//         console.log('should display a question detail 2');
//     })

//     // afterEach(() => {
//     //     console.log('afterEach');
//     // })

//     afterAll(() => {
//         console.log('afterAll')
//     })


// });

describe("The Question Detail Component", () => {
    describe('The Container Element', () => {
        describe("mapStateToProps", () => {
            it("hould map the state to props correctly", () => {
                const sampleQuestion = {
                    question_id: 42,
                    body: "Space is big"
                }
                const appState = {
                    questions: [sampleQuestion]
                }
                const ownProps = {
                    question_id: 42
                }
                const componentState = mapStateToProps(appState, ownProps);
                console.log(componentState);
                expect(componentState).toEqual(sampleQuestion);
            })
        })
    })

    describe("The display element", () => {
        it('Should not regress', () => {
            const tree = renderer.create(
                <QuestionDetailDisplay
                    title="The meaning of life"
                    body="42"
                    answer_count={0}
                    tags={['asdf', 'añsldfkjas']}
                />
            );
            expect(tree.toJSON()).toMatchSnapshot();
        })
    })

})