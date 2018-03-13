import { pingPong } from '../js/ping-pong.js';

describe('pingPong', function() {
  it('number is divisible by 3, return ping', function() {
    expect(pingPong(3)).toEqual([1, 2, "ping"])
  });
  it('number is divisible by 5, return pong', function() {
    expect(pingPong(5)).toEqual([1, 2, "ping", 4, "pong"])
  });
  it('number is divisible by 15, return ping-pong', function() {
    expect(pingPong(15)).toEqual([ 1, 2, 'ping', 4, 'pong', 'ping', 7, 8, 'ping', 'pong', 11, 'ping', 13, 14, 'ping-pong' ])
  });
});
