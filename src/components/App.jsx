import { Profile } from 'js/profile';
import { Statistics } from 'js/statistics';
import { FriendList } from 'js/friends';
import { Transaction } from 'js/transaction';

import user from '../data/user';
import statistics from '../data/statistics';
import friends from '../data/friends';
import transaction from '../data/transactions';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" statistics={statistics} />
      <FriendList friends={friends} />
      <Transaction transaction={transaction} />
    </div>
  );
};
