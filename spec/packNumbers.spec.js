describe('Pack numbers', function () {

    it('should return an array', function () {
        expect(packNumbers() instanceof Array).toBeTruthy();
    });


    describe('without parameters', function () {
        it('should return an empty array', function () {
            expect(packNumbers().length).toBe(0);
        });
    });

    describe('with valid parameters', function () {
        it('should return [2] if input is [2]', function () {
            expect(packNumbers([2])).toEqual([2]);
        });

        it('should return ["2:2"] if input is [2, 2]', function () {
            expect(packNumbers([2, 2])).toEqual(['2:2']);
        });

        it('should return [9, 9, 1, 5, 5, 5, 9] if input is ["9:2", 1, "5:3", 9]', function () {
            expect(packNumbers([9, 9, 1, 5, 5, 5, 9])).toEqual(["9:2", 1, "5:3", 9]);
        });
    });

});
