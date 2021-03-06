import React from 'react';
import { shallow } from 'enzyme';
import { AddressBookIcon } from '@patternfly/react-icons';
import EmptyState from './EmptyState';
import EmptyStateBody from './EmptyStateBody';
import EmptyStateSecondaryActions from './EmptyStateSecondaryActions';
import EmptyStateIcon from './EmptyStateIcon';
import { Button } from '../Button';
import { Title } from '../Title';

describe('EmptyState', () => {
  test('Main', () => {
    const view = shallow(
      <EmptyState>
        <Title size="lg">HTTP Proxies</Title>
        <EmptyStateBody>
          Defining HTTP Proxies that exist on your network allows you to perform various actions through those proxies.
        </EmptyStateBody>
        <Button variant="primary">New HTTP Proxy</Button>
        <EmptyStateSecondaryActions>
          <Button variant="link" aria-label="learn more action">
            Learn more about this in the documentation.
          </Button>
        </EmptyStateSecondaryActions>
      </EmptyState>
    );
    expect(view).toMatchSnapshot();
  });

  test('Body', () => {
    const view = shallow(<EmptyStateBody className="custom-empty-state-body" id="empty-state-1" />);
    expect(view.props().className).toBe('pf-c-empty-state__body custom-empty-state-body');
    expect(view.props().id).toBe('empty-state-1');
  });

  test('Secondary Action', () => {
    const view = shallow(<EmptyStateSecondaryActions className="custom-empty-state-secondary" id="empty-state-2" />);
    expect(view.props().className).toBe('pf-c-empty-state__secondary custom-empty-state-secondary');
    expect(view.props().id).toBe('empty-state-2');
  });

  test('Icon', () => {
    const view = shallow(
      <EmptyStateIcon icon={AddressBookIcon} className="custom-empty-state-icon" id="empty-state-icon" />
    );
    expect(view.props().className).toBe('pf-c-empty-state__icon custom-empty-state-icon');
    expect(view.props().id).toBe('empty-state-icon');
  });
});
