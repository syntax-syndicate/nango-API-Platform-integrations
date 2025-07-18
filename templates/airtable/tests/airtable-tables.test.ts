import { vi, expect, it, describe } from 'vitest';

import sync from '../syncs/tables.js';

describe('airtable tables tests', () => {
    const nangoMock = new global.vitest.NangoSyncMock({
        dirname: __dirname,
        name: 'tables',
        Model: 'Table'
    });

    const models = 'Table'.split(',');
    const batchSaveSpy = vi.spyOn(nangoMock, 'batchSave');

    it('should get, map correctly the data and batchSave the result', async () => {
        await sync.exec(nangoMock);

        for (const model of models) {
            const expectedBatchSaveData = await nangoMock.getBatchSaveData(model);

            const spiedData = batchSaveSpy.mock.calls.flatMap((call) => {
                if (call[1] === model) {
                    return call[0];
                }

                return [];
            });

            const spied = JSON.parse(JSON.stringify(spiedData));

            expect(spied).toStrictEqual(expectedBatchSaveData);
        }
    });

    it('should get, map correctly the data and batchDelete the result', async () => {
        await sync.exec(nangoMock);

        for (const model of models) {
            const batchDeleteData = await nangoMock.getBatchDeleteData(model);
            if (batchDeleteData && batchDeleteData.length > 0) {
                expect(nangoMock.batchDelete).toHaveBeenCalledWith(batchDeleteData, model);
            }
        }
    });
});
