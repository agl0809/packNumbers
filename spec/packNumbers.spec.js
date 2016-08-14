describe('Pack numbers', function(){

    it('should return an array', function () {
        expect(packNumbers() instanceof Array).toBeTruthy();
    });

    describe('retrieving no param', function () {
        it('should return an empty array', function () {
            expect(packNumbers().length).toBe(0);
        });
    });

    describe('retrieving a valid param', function () {
        it('should return [2] if [2] is retrieved', function () {
           expect(packNumbers([2])).toEqual([2]);
        });
    });

});
