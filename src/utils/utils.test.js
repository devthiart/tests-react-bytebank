test('Must return updated account balance with earnings', () => {
    const calcEarnings = jest.fn(accountBalance => accountBalance + accountBalance * 0.005);

    const accountBalance = 100;
    const newAccountBalance = calcEarnings(accountBalance);

    expect(newAccountBalance).toBe(100.5);
    expect(calcEarnings).toBeCalled();
    expect(calcEarnings).toHaveBeenCalledWith(accountBalance);
});