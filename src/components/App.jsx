import { Profile } from 'js/components/profile';
import { Statistics } from 'js/components/statistics';
import { FriendList } from 'js/components/friends';
import { Transaction } from 'js/components/transaction';

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
      <Statistics statistics={statistics} />
      <FriendList friends={friends} />
      <Transaction transaction={transaction} />
    </div>
  );
};
