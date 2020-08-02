import knex from 'api/config/database';

const selectableProps = ['id', 'email', 'shared'];
const tableName = 'users';

export default {
    create: () => knex.insert({}).returning(selectableProps).into(tableName),

    update: (id, props) =>
        knex
            .update(props)
            .from(tableName)
            .where({id})
            .returning(selectableProps),

    find: (id) => knex.select(selectableProps).from(tableName).where({id}),
};
