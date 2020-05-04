import React from 'react';
import TagsList from './TagsList';
import renderer from 'react-test-renderer';

describe("The tags list", () => {
    it("renders as expect", () => {
        const tree = renderer
        .create(<TagsList tags={['css', 'html', 'python']} />)
        .toJSON();

        console.log(tree);

        expect(tree).toMatchSnapshot();
    })
})