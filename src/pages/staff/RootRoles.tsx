import React, {useRef, useState} from 'react';
import {SearchOutlined} from '@ant-design/icons';
import {InputRef, Select, TableColumnsType, TableColumnType, TableProps} from 'antd';
import {Button, Input, Space, Table} from 'antd';
import type {FilterDropdownProps} from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';


interface DataType {
    key: React.Key;
    name: string;
    surname: string;
    pnumber: string;
    role: string;
}

const RootRoles: React.FC = () => {

    type DataIndex = keyof DataType;

    const roleOptions = [
        { value: 'admin', label: 'Admin' },
        { value: 'user', label: 'User' },
        { value: 'moderator', label: 'Moderator' },
    ];

    const data: DataType[] = [
        {
            key: '1',
            name: 'Mike',
            surname: 'Johnson',
            pnumber: '+12345678',
            role: 'admin',
        },
        {
            key: '2',
            name: 'Emma',
            surname: 'Smith',
            pnumber: '+23456789',
            role: 'user',
        },
        {
            key: '3',
            name: 'Olivia',
            surname: 'Brown',
            pnumber: '+34567890',
            role: 'moderator',
        },
        {
            key: '4',
            name: 'Liam',
            surname: 'Jones',
            pnumber: '+45678901',
            role: 'admin',
        },
        {
            key: '5',
            name: 'Noah',
            surname: 'Garcia',
            pnumber: '+56789012',
            role: 'user',
        },
        {
            key: '6',
            name: 'Sophia',
            surname: 'Martinez',
            pnumber: '+67890123',
            role: 'moderator',
        },
        {
            key: '7',
            name: 'Ava',
            surname: 'Davis',
            pnumber: '+78901234',
            role: 'admin',
        },
        {
            key: '8',
            name: 'Isabella',
            surname: 'Lopez',
            pnumber: '+89012345',
            role: 'user',
        },
        {
            key: '9',
            name: 'Elijah',
            surname: 'Wilson',
            pnumber: '+90123456',
            role: 'moderator',
        },
        {
            key: '10',
            name: 'James',
            surname: 'Anderson',
            pnumber: '+01234567',
            role: 'user',
        },
    ];

    type OnChange = NonNullable<TableProps<DataType>['onChange']>;
    type Filters = Parameters<OnChange>[1];

    type GetSingle<T> = T extends (infer U)[] ? U : never;
    type Sorts = GetSingle<Parameters<OnChange>[2]>;

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);
    const [filteredInfo, setFilteredInfo] = useState<Filters>({});
    const [sortedInfo, setSortedInfo] = useState<Sorts>({});

    const handleSearch = (
        selectedKeys: string[],
        confirm: FilterDropdownProps['confirm'],
        dataIndex: DataIndex,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<DataType> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="default"
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const handleChange: OnChange = (pagination, filters, sorter) => {
        setFilteredInfo(filters);
        setSortedInfo(sorter as Sorts);
    };

    const columns: TableColumnsType<DataType> = [
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
            ...getColumnSearchProps('name'),
            sorter: (a, b) => a.name.length - b.name.length,
            sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Фамилия',
            dataIndex: 'surname',
            key: 'surname',
            ...getColumnSearchProps('surname'),
            sorter: (a, b) => a.surname.length - b.surname.length,
            sortOrder: sortedInfo.columnKey === 'surname' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Номер телефона',
            dataIndex: 'pnumber',
            key: 'pnumber',
            ...getColumnSearchProps('pnumber'),
            sorter: (a, b) => a.pnumber.length - b.pnumber.length,
            sortOrder: sortedInfo.columnKey === 'pnumber' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Роль',
            key: 'role',
            filters: roleOptions.map(option => ({ text: option.label, value: option.value })),
            filteredValue: filteredInfo.role || null,
            onFilter: (value, record) => record.role.includes(value as string),
            sorter: (a, b) => a.role.length - b.role.length,
            sortOrder: sortedInfo.columnKey === 'role' ? sortedInfo.order : null,
            render: (_, record) => (
                <Select defaultValue={record.role} style={{ width: '100%' }} options={roleOptions} />
            ),
        },
    ];

    return (
        <div>
            <Table
                dataSource={data}
                columns={columns}
                onChange={handleChange}
                pagination={{ pageSize: 5 }}
            />
        </div>
    );
};

export default RootRoles;

