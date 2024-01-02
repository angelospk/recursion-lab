import DiningTree from './DiningTree';
import Goal from '../shared/Goal';
import '../../pages/Problem2.scss';

function DiningUnderstand(): JSX.Element {
  return (
    <div>
      This binary tree visualization aims to highlight how a binary tree is
      traversed in this phone call context. We assume a{' '}
      <b>post-order tree traversal</b>, such that the left subtree is traversed
      first, then the right subtree, and finally the root node of the subtree is
      traversed. Note that if someone calls someone else and no one picks up,
      that is represented as NULL, and the phone call thus takes 0 minutes.
      <br />
      <br />
      <Goal>Given information:</Goal>
      <br />
      <div className="goal-container">
        <table className="left-align">
          <thead>
            <tr>
              <td>Person</td>
              <td>Length of a Call</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lea</td>
              <td>10 minutes</td>
            </tr>
            <tr>
              <td>May</td>
              <td>7 minutes</td>
            </tr>
            <tr>
              <td>Jane</td>
              <td>15 minutes</td>
            </tr>
            <tr>
              <td>Ryan</td>
              <td>5 minutes</td>
            </tr>
            <tr>
              <td>Sam</td>
              <td>12 minutes</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <Goal>
        Find the total call time for Lea. <br />
        <small style={{ fontWeight: '500' }}>
          (the total time it will take for Lea&apos;s calls and all subsequent
          calls to finish)
        </small>
      </Goal>
      <br />
      <DiningTree />
      <br />
    </div>
  );
}

export default DiningUnderstand;
